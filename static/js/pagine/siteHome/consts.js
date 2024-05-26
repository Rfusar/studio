//elementi codici
const Flask = document.querySelector("#codiceFlask")
const Powershell = document.querySelector("#heroCodice_Powershell")
const Bash = document.querySelector("#heroCodice_Bash")
//URL
const urlFlask = document.querySelector("#urlFlask")
const urlFastAPI = document.querySelector("#urlFastAPI")
const urlDocker = document.querySelector("#urlDocker") 
const urlKubernetes = document.querySelector("#urlKubernetes")
const urlGit = document.querySelector("#urlGit")

const codici = [
  {
    elemento: Flask,
    codice: `
from flask Import Flask, jsonify, request

app = Flask(__name__)
app.secret_key = b'superSecretKey'


#Le funzioni posso nominate come meglio credi

@app.route("/", methods=["GET"])  #Esempio di route con metodo GET
def Home():
  return "<h1>sciao belu</h1>"


@app.route("/api/saluto", methods=["POST"]) #Esempio di route con metodo POST
def api_saluto():
  reqBody = {k:v for k,v in request.json.items()}
  if reqBody.get("salto") == "yes":
    return jsonify({"saluto": "sciao belu"})


@app.route("/urlDinamico/<qualcosa>", methods=["POST"]) 
def UrlDinamico(qualcosa):
  return jsonify({"res": qualcosa})



if __name__ == "__main__":
  app.run(debug=True)
`
  },
  {
    elemento: Powershell,
    codice: `Write-Host "ciao da terminale powershell"`

  },
  {
    elemento: Bash,
    codice: `echo "ciao dal terminale bash"`
  },
]



const links = [
  {
    elemento: urlFlask, 
    url: "https://flask.palletsprojects.com/en/3.0.x/"
  },
  {
    elemento: urlFastAPI,
    url: "https://fastapi.tiangolo.com/"
  },
  {
    elemento: urlDocker,
    url: "https://docs.docker.com/"
  },
  {
    elemento: urlKubernetes,
    url: "https://kubernetes.io/it/docs/concepts/overview/what-is-kubernetes/"
  },
  {
    elemento: urlGit,
    url: "https://git-scm.com/docs"
  },
]
export  {codici, links}
