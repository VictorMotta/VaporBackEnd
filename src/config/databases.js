import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);
let db;

try {
    await mongoClient.connect();
    db = mongoClient.db();
} catch (err) {
    console.log("Erro no mongo.conect", err.message);
}

export default db;

export const usersCollection = db.collection("users");
export const productsCollection = db.collection("products");
export const sessionsCollection = db.collection("sessions");
