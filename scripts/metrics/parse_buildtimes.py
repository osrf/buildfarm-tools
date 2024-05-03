#!/usr/bin/env python3

import argparse
import sys
import os
import re
from datetime import datetime

parser = argparse.ArgumentParser(description='Parse build times for sections, subsections and packages in a build log.')
parser.add_argument('-d', '--domain', help='domain name', type=str, required=True)
parser.add_argument('-j', '--job', help='job name', type=str, required=True)
parser.add_argument('-b', '--build', help='build number. All builds if not specified', type=int)
parser.add_argument('-o', '--output', help='output file', type=str)

TEST_DB_DIR = f"{os.environ['HOME']}/osrf/testdb/"
TIME_FORMAT = '%H:%M:%S.%f'
OUTPUT_HEADERS = ['job_name', 'build_number', 'section_name', 'section_type', 'start_time', 'end_time', 'duration_seconds']

# \1: start time
# \2: section name
# \3: end time
# \4: '' or 'FAILURE'
sections_regex = re.compile(r"^(\d{2}:\d{2}:\d{2}\.\d{3}) +# BEGIN SECTION: (.+)$[\s\S]+?^(\d{2}:\d{2}:\d{2}\.\d{3}) +(?:# END SECTION$|Finished: (FAILURE))+?", re.MULTILINE)
subsections_regex = re.compile(r"^(\d{2}:\d{2}:\d{2}\.\d{3}) +# BEGIN SUBSECTION: (.+)$[\s\S]+?^(\d{2}:\d{2}:\d{2}\.\d{3}) +(?:# END SUBSECTION$|Finished: (FAILURE))+?", re.MULTILINE)
packages_regex = re.compile(r"^(\d{2}:\d{2}:\d{2}\.\d{3}) +Starting >>> (.+)$[\s\S]+?^(\d{2}:\d{2}:\d{2}\.\d{3}) +Finished(?: <<< \2|: (FAILURE))+?", re.MULTILINE)

def parse_times(filename: str):
    with open(filename, 'r') as f:
        text = f.read()

    sections = [(s[1], "section", datetime.strptime(s[0], TIME_FORMAT), datetime.strptime(s[2], TIME_FORMAT) if not s[3] else None) for s in sections_regex.findall(text)] + [(s[1], "subsection", datetime.strptime(s[0], TIME_FORMAT), datetime.strptime(s[2], TIME_FORMAT) if not s[3] else None) for s in subsections_regex.findall(text)] + [(s[1], "package", datetime.strptime(s[0], TIME_FORMAT), datetime.strptime(s[2], TIME_FORMAT) if not s[3] else None) for s in packages_regex.findall(text)]
    sections.sort(key=lambda x: x[2])

    duplicates = list(filter(lambda x:  sum(1 for s in sections if s[0] == x[0]) > 1, sections))
    for d in duplicates:
        parent_section = None
        for s in sections:
            if s[1] != d[1] and s[2] < d[2]:
                parent_section = s[0]
            elif s[2] >= d[2]:
                break
        if parent_section is None:
            raise Exception('Unknown parent section')
        index = sections.index(d)
        sections[index] = (f"{d[0]} ({parent_section})", *(d[1:]))
    return sections

args = parser.parse_args()
args.output = args.output if args.output else f"{args.job}_buildtimes.csv"

job_dir = os.path.join(TEST_DB_DIR, args.domain, args.job)
if not os.path.exists(job_dir):
    print(f"Could not find job directory {job_dir}")
    print("Try running './fetch.rb' with timestamp option to fetch the logs")
    sys.exit(1)

if args.build:
    builds = [str(args.build)]
else:
    builds = sorted(os.listdir(job_dir), reverse=True)

with open(args.output, 'w') as f:
    f.write(','.join(OUTPUT_HEADERS) + '\n')
    for build in builds:
        log_file = os.path.join(job_dir, build, 'timestamps.txt')
        if not os.path.exists(log_file):
            print(f"Could not find timestamps file for build {build}")
            continue

        sections = parse_times(log_file)
        for section in sections:
            duration_str = float('nan')
            if section[3]:
                duration = section[3] - section[2]
                duration_str = f"{duration.seconds + round(duration.microseconds/1000000, 3)}"
            f.write(f"{args.job},{build},{section[0]},{section[1]},{section[2].time()},{section[3].time() if section[3] else section[3]},{duration_str}\n")

        print(f"Processed build {build}")

