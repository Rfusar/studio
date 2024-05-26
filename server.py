from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from routes import users, api, pagine
import pkg_resources

app = FastAPI()



static_path = pkg_resources.resource_filename(__name__, 'static')
app.mount("/static", StaticFiles(directory=static_path), name="static")



app.include_router(users.users)
app.include_router(api.api)
app.include_router(pagine.pag)

