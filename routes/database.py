from pymongo import MongoClient
from . import mongo

client = MongoClient(f"mongodb+srv://{mongo['user']}:{mongo['password']}@{mongo['cluster']}.mongodb.net/")

DB = client["STUDIO"]
