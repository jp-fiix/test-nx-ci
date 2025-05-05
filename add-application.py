import json
import subprocess
import os
from pprint import pprint
import shutil
              
projectName = input("Enter project name: ")
if (projectName == ""):
    exit()

githubRepoName = input("Enter GITHUB repo name: (" + projectName + ") ")
if (githubRepoName == ""):
    githubRepoName = projectName

path = "tmp/" + projectName
gitUrl = "https://github.com/macmms/cmms2.0-nx-poc-" + githubRepoName + ".git"

result = subprocess.run(["nx", "g", "@nx/angular:library", path], capture_output=True)
if (result.returncode != 0):
    pprint(result.stderr)
    exit()

os.chdir(path)
result = subprocess.run(["git", "init"], capture_output=True)
if (result.returncode != 0):
    pprint(result.stderr)
    exit()

result = subprocess.run(["git", "add", "-A"], capture_output=True)
if (result.returncode != 0):
    pprint(result.stderr)
    exit()


result = subprocess.run(["git", "commit", "-m", "Initial commit"], capture_output=True)
if (result.returncode != 0):
    pprint(result.stderr)
    exit()

result = subprocess.run(["git", "remote", "add", "origin", gitUrl], capture_output=True)
if (result.returncode != 0):
    pprint(result.stderr)
    exit()

result = subprocess.run(["git", "push", "-u", "-f", "origin", "main"], capture_output=True)
if (result.returncode != 0):
    pprint(result.stderr)
    exit()

os.chdir("../..")

with open('config.json', "r") as f:
    configData = json.load(f)
    configData["libs"].append({
        "name": projectName,
        "routerPath": projectName,
        "indexPath": "src/index.ts",
        "mainComponent": projectName[0].upper() + projectName[1:] + "Component",
        "gitUrl": gitUrl,
    })

with open('config.json', "w") as f:
    json.dump(configData, f, ensure_ascii=False, indent=4)


shutil.rmtree(path)
exec(open('init.py').read())