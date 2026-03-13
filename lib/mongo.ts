import { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error("MONGO_URI not found or defined");
}
const client = new MongoClient(uri);

export const db = client.db("snap-pass");