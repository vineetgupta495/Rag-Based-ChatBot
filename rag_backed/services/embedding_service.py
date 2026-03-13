from sentence_transformers import SentenceTransformer



#for github because i already have to models locally
model = SentenceTransformer("BAAI/bge-base-en-v1.5")
#model = SentenceTransformer("models/bge-base-en-v1.5")


def embed_passages(texts):
    return model.encode(
        ["passage: " + t for t in texts],
        normalize_embeddings=True
    )

def embed_query(text):
    return model.encode(
        "query: " + text,
        normalize_embeddings=True
    )