import subprocess
import argparse

import matplotlib.pyplot as plt

parser = argparse.ArgumentParser(description='Generate buildtime graph')
parser.add_argument('job_name', type=str, help='Job name')

args = parser.parse_args()

buildtime_output = subprocess.run(['./sql_run.sh', 'get_job_buildtimes.sql', args.job_name], stdout=subprocess.PIPE).stdout.decode('utf-8').strip().split('\n')

keys = buildtime_output[0].split('|')
buildtimes = [dict(zip(keys, line.split('|'))) for line in buildtime_output[1:]]

buildtimes = list(filter(lambda buildtime: not(int(buildtime['buildtime'])/60000.0 < 200 and buildtime['status'] == 'FAILURE'), buildtimes))

plt.plot([int(buildtime['build_number']) for buildtime in buildtimes], [int(buildtime['buildtime'])/60000.0 for buildtime in buildtimes])
plt.xlabel('Build number')
plt.ylabel('Build time (minutes)')
plt.title(f'Build time for job {args.job_name}')
plt.show()









