from . import (
        json, APIRouter, Request, Response,
        filePorts, apikey
)
from .database import DB

api = APIRouter()

def checkAuth(req):
    IN_apikey = req.headers.get("Authorization").split(" ")[1]
    if apikey == IN_apikey: return True
    else: return False

def RES(obj, _type, code):
    if _type in ["json"]:
        return Response(content=json.dumps(obj), media_type=f"application/{_type}", status_code=code)
    elif _type in ["text"]:
        return Response(content=obj, media_type="text/plain; charset=utf-8", status_code=code)

@api.post("/api/studio_generale/video")
async def video(req: Request):
    if checkAuth(req) == False: return RES({"res": "Fanculo"}, "json", 403)
    video = [d for d in DB["video"].find({}, {"_id": 0})][0]
    v = {k:v for k,v in video.items()}
    return RES(v, "json", 200)

@api.post("/api/studio_generale/cybersecurity")
async def cybersecurity(req: Request):
    if checkAuth(req) == False: return RES({"res": "Fanculo"}, "json", 403)
    jbody = await req.body()
    b = json.loads(jbody)
    if b["arg"] == "ports": return RES(filePorts, "text", 200)
    else: return RES({"res": "Fanculo"}, "json", 404)


