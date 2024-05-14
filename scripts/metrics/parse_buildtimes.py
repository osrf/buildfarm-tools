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
parser.add_argument('--reuse', help='reuse existing data', action='store_true')
parser.add_argument('--condition', help='condition regex to parse a build', type=str)

TEST_DB_DIR = f"{os.environ['HOME']}/osrf/testdb/"
TIME_FORMAT = '%H:%M:%S.%f'
OUTPUT_HEADERS = ['job_name', 'build_number', 'section_name', 'section_type', 'start_time', 'end_time', 'duration_seconds']
SECTION_HIERARCHY = ['section', 'subsection', 'package']

# \1: start time
# \2: section name
# \3: end time
# \4: '' or 'FAILURE'
sections_regex = re.compile(r"^(\d{2}:\d{2}:\d{2}\.\d{3}) +# BEGIN SECTION: (.+)$[\s\S]+?^(\d{2}:\d{2}:\d{2}\.\d{3}) +(?:# END SECTION$|Finished: (FAILURE))+?", re.MULTILINE)
subsections_regex = re.compile(r"^(\d{2}:\d{2}:\d{2}\.\d{3}) +# BEGIN SUBSECTION: (.+)$[\s\S]+?^(\d{2}:\d{2}:\d{2}\.\d{3}) +(?:# END SUBSECTION$|Finished: (FAILURE))+?", re.MULTILINE)
packages_regex = re.compile(r"^(\d{2}:\d{2}:\d{2}\.\d{3}) +Starting >>> (.+)$[\s\S]+?^(\d{2}:\d{2}:\d{2}\.\d{3}) +Finished(?: <<< \2|: (FAILURE))+?", re.MULTILINE)

# \1: start time
# \2: section name
start_pkg_regex = re.compile(r"^(\d{2}:\d{2}:\d{2}\.\d{3}) +Starting >>> (.+)$", re.MULTILINE)

# \1: end time
# \2: section name
# \3: duration
# \4: '' or 'FAILURE'
end_pkg_regex = re.compile(r"^(\d{2}:\d{2}:\d{2}\.\d{3}) +Finished(?: <<< (.+) \[(.*)\]|: (FAILURE))", re.MULTILINE)

def parse_times(filename: str):
    with open(filename, 'r') as f:
        text = f.read()

    sections = [(s[1], "section", datetime.strptime(s[0], TIME_FORMAT), datetime.strptime(s[2], TIME_FORMAT) if not s[3] else None) for s in sections_regex.findall(text)] + [(s[1], "subsection", datetime.strptime(s[0], TIME_FORMAT), datetime.strptime(s[2], TIME_FORMAT) if not s[3] else None) for s in subsections_regex.findall(text)] + [(s[1], "package", datetime.strptime(s[0], TIME_FORMAT), datetime.strptime(s[2], TIME_FORMAT) if not s[3] else None) for s in packages_regex.findall(text)]
    sections.sort(key=lambda x: x[2])

    for s1 in sections:
        if s1[1] == 'section':
            continue
        parent_section = None
        for s2 in sections:
            if s2[1] != s1[1] and s2[2] < s1[2]:
                parent_section = s2[0] if s2[1] == SECTION_HIERARCHY[SECTION_HIERARCHY.index(s1[1])-1] else parent_section
            elif s2[2] >= s1[2]:
                break
        if parent_section is None:
            raise Exception(f"Could not find parent section for {s1}")
        
        indx = sections.index(s1)
        parent_section = parent_section[:parent_section.index(' [')] if parent_section[-1] == ']' else parent_section
        sections[indx] = (f"{s1[0]} [{parent_section}]", *(s1[1:]))
    return sections

args = parser.parse_args()

if args.reuse and not args.output:
    print("Cannot reuse data without output file")
    sys.exit(1)

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

with open(args.output, 'a' if args.reuse else 'w') as out:
    out.write(','.join(OUTPUT_HEADERS) + '\n')  if not args.reuse else None
    for build in builds:
        log_file = os.path.join(job_dir, build, 'timestamps.txt')
        if not os.path.exists(log_file):
            print(f"Could not find timestamps file for build {build}")
            continue

        if args.condition:
            with open(log_file, 'r') as lf:
                if not re.search(args.condition, lf.read()):
                    print(f"Skipping build {build} as it does not match the condition")
                    continue

        sections = parse_times(log_file)
        for section in sections:
            duration_str = float('nan')
            if section[3]:
                duration = section[3] - section[2]
                duration_str = f"{duration.seconds + round(duration.microseconds/1000000, 3)}"
            out.write(f"{args.job},{build},{section[0]},{section[1]},{section[2].time()},{section[3].time() if section[3] else section[3]},{duration_str}\n")

        print(f"Processed build {build}")

