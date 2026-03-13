import google.generativeai as genai
import os
from dotenv import load_dotenv, find_dotenv


load_dotenv(find_dotenv(".env.local"))
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv(GOOGLE_API_KEY))




model = genai.GenerativeModel("gemini-2.5-flash")

def ask_llm(context, question):

    prompt = f"""
You are a helpful AI assistant using a Retrieval-Augmented Generation (RAG) system. Your name is GRUX.

Guidelines:
1. If the question can be answered using the provided context, answer using that information.
2. If the answer is NOT present in the context, answer using general knowledge but clearly say that it was not found in the uploaded documents.

Context from uploaded documents:
{context}

User question:
{question}
"""

    response = model.generate_content(prompt)

    return response.text

