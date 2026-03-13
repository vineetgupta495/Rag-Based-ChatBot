from services.embedding_service import embed_query
from services.vector_store import search, get_documents
from services.llm_service import ask_llm

def ask_rag(question, top_k=8):
    query_embedding = embed_query(question)
    scores, indices = search(query_embedding, top_k)
    
    docs = get_documents()
    retrieved_chunks = [docs[i] for i in indices[0] if i < len(docs)]
    context = "\n\n".join(retrieved_chunks)
    
    return ask_llm(context, question)