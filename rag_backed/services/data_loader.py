import os
from pypdf import PdfReader


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UPLOAD_DIR = os.path.join(BASE_DIR,"uploads")



def read_txt(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def read_pdf(path):
    if os.path.getsize(path) == 0:
        print(f"Skipping empty PDF: {path}")
        return ""

    try:
        reader = PdfReader(path)
        text = ""

        for page in reader.pages:
            text += page.extract_text() or ""

        return text

    except Exception as e:
        print(f"Error reading {path}: {e}")
        return ""

def load_documents():
    documents = []

    for file in os.listdir(UPLOAD_DIR):
        path = os.path.join(UPLOAD_DIR, file)

        if file.endswith(".txt"):
            documents.append(read_txt(path))

        elif file.endswith(".pdf"):
            documents.append(read_pdf(path))

    return documents


def chunk_text(text, chunk_size=1600, overlap=300):
    chunks = []
    start = 0

    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start += chunk_size - overlap

    return chunks


def load_and_chunk():
    documents = load_documents()
    all_chunks = []

    for doc in documents:
        chunks = chunk_text(doc)
        all_chunks.extend(chunks)

    return all_chunks