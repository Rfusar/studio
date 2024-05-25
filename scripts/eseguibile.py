import subprocess
def main():
    subprocess.call('pyinstaller --name server --add-data "templates:templates" --add-data "static:static" --add-data "routes:routes" server.py --onefile', shell=True)
