import faiss
import numpy as np
from services.embedding_service import embed_passages

documents = []
index = None

def build_index(chunks):
    global index, documents

    documents = chunks

    doc_embeddings = embed_passages(chunks)
    doc_embeddings = np.array(doc_embeddings).astype("float32")

    if len(doc_embeddings) == 0:
        print("No embeddings created. Skipping index.")
        return

    dimension = doc_embeddings.shape[1]

    index = faiss.IndexFlatIP(dimension)
    index.add(doc_embeddings)


def search(query_embedding, top_k=3):
    global index

    query_embedding = np.array([query_embedding]).astype("float32")
    scores, indices = index.search(query_embedding, top_k)

    return scores, indices


def get_documents():
    return documents

    