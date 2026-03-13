from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv(".env.local"))

MONGO_URL = os.getenv("MONGO_URL")


client = AsyncIOMotorClient(MONGO_URL)

db = client["rag_chat"]

sessions_collection = db["sessions"]
messages_collection = db["messages"]