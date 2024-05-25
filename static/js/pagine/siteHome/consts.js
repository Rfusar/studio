const e_Flask = document.querySelector("#codiceFlask")
const codeFlask = `
from flask Import Flask

app = Flask(__name__)


#Definisci una route
@app.route("/", methods=["GET"])
def Home():
  return "<h1>sciao belu</h1>"



if __name__ == "__main__":
  app.run(debug=True)
`

const e_Powershell = document.querySelector("#heroCodice_Powershell")
const codePowershell = `
Write-Host "ciao da terminale powershell"
`

const e_Bash = document.querySelector("#heroCodice_Bash")
const codeBash = `
echo "ciao dal terminale bash"
`
const codici = [
  {
    "elemento": e_Flask,
    "codice": codeFlask
  },
  {
    "elemento": e_Powershell,
    "codice": codePowershell
  },
  {
    "elemento": e_Bash,
    "codice": codeBash
  },
]
export default codici
