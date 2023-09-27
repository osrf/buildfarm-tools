trs = []

job, issue = input("<job> <issue>:").split()

while tr := input():
    trs.append(tr)

trs = [f"./issue_save_new.sh {x} {x.split('.')[0]} '{job}' '{issue}'" + "\n" for x in trs]

open('output.sh', 'w').writelines(trs)

