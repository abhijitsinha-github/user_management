import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const URL = process.env.MONGO_URL;
const client = new MongoClient(URL);

export { client };
