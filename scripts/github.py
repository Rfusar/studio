import subprocess
def main():
    subprocess.call("clear && git add . && git commit -m '0.0.0' && git push origin master", shell=True)
