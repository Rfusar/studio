import GSAP_INIT() from './gsap/siteHome.js'

const codiceFlask = document.querySelector("#codiceFlask")
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
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const codice_powershell = `
Write-Host "ciao da terminale powershell"
`
const codice_bash = `
echo "ciao dal terminale bash"
`
const codePowershell = document.querySelector("#heroCodice_Powershell")
const codeBash = document.querySelector("#heroCodice_Bash")
async function animateText(element, text, delay) {
    for (const t of text) {
        element.innerHTML += t
        await sleep(delay)
    }
}
animateText(codePowershell, codice_powershell, 30)
animateText(codeBash, codice_bash, 30)
