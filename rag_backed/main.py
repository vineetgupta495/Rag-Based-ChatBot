from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from services.vector_store import build_index
from services.data_loader import load_and_chunk
from services.rag_pipeline import ask_rag
from fastapi.middleware.cors import CORSMiddleware
import os
from fastapi import APIRouter
from db.database import sessions_collection, messages_collection
from datetime import datetime





app = FastAPI()
router = APIRouter()




app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




class AskRequest(BaseModel):
    question: str


@app.on_event("startup")
def startup_event():
    chunks = load_and_chunk()
    build_index(chunks)
    print("Index built successfully")


class SessionCreate(BaseModel):
    title: str | None = "New Chat"

@router.post("/sessions")
async def create_session(session: SessionCreate):
    new_session = {
        "title": session.title or "New Chat",
        "createdAt": datetime.utcnow()
    }

    result = await sessions_collection.insert_one(new_session)

    return {"sessionId": str(result.inserted_id)}

@router.get("/sessions")
async def get_sessions():

    sessions = []

    async for s in sessions_collection.find().sort("createdAt", -1):
        sessions.append({
            "id": str(s["_id"]),
            "title": s["title"]
        })

    return sessions



@router.get("/sessions/{session_id}/messages")
async def get_messages(session_id: str):

    messages = []

    async for m in messages_collection.find({"sessionId": session_id}).sort("createdAt", 1):
        messages.append({
            "role": m["role"],
            "text": m["text"]
        })

    return messages



class Message(BaseModel):
    sessionId: str
    role: str
    text: str

@router.post("/messages")
async def save_message(message: Message):

    msg = {
        "sessionId": message.sessionId,
        "role": message.role,
        "text": message.text,
        "createdAt": datetime.utcnow()
    }

    await messages_collection.insert_one(msg)

    return {"status": "saved"}





@app.post("/ask")
def ask(req: AskRequest):
    answer = ask_rag(req.question)
    return {"answer": answer}



@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    os.makedirs("uploads", exist_ok=True)

    file_path = f"uploads/{file.filename}"

    contents = await file.read()

    with open(file_path, "wb") as f:
        f.write(contents)

    return {"message": "file uploaded", "path": file_path}
from db.database import client
@app.get("/db-test")
async def db_test():
    dbs = await client.list_database_names()
    return {"databases": dbs}


app.include_router(router)