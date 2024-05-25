from . import APIRouter, Request, HTMLResponse, temp

pag = APIRouter()

@pag.get("/", response_class=HTMLResponse)
def home(req: Request):
    return temp.TemplateResponse("siteHome.html", {"request": req})
