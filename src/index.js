import { app } from "./app.js";
import dotenv from "dotenv";
import { client } from "./db/mongodb.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await client.connect();
    console.log(`Server connected to MongoDB on: ${process.env.MONGO_URL}`);
    console.log(`Server is running on : http://localhost:${PORT}/`);
  } catch (error) {
    console.log("Server failed to connect to MongoDB ", error);
    process.exit(1);
  }
});
