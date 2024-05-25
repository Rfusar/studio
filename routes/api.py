from . import json, APIRouter, Request
from .database import DB

api = APIRouter()

@api.post("/api/studio")
def API_studio(req: Request):
    video = [d for d in DB["video"].find({}, {"_id": 0})][0]
    v = {k:v for k,v in video.items()}
        
    return json.dumps(v)
