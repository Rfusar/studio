from . import APIRouter, HTMLResponse, Request, temp

users = APIRouter()

#GET
@users.get("/login", response_class=HTMLResponse)
async def login(req: Request):
    return temp.TemplateResponse("user/login.html", {"request": req, "nome": "riccardo"}) 
