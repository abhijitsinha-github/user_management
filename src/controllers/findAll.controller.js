import { client } from "../db/mongodb.js";

const findAll = async (req, res) => {
  try {
    const db = client.db("user_management");
    const collection = db.collection("users");

    // finding all user data
    const findUsers = await collection.find().toArray();

    if (findUsers.length > 0) {
      return res
        .status(200)
        .send({ message: "User Data Found!", data: findUsers });
    }

    return res.status(204).send();
  } catch (error) {
    console.log("Error Finding Data", error);
    res.status(500).send({ message: `Internal Server Error` });
  }
};

export { findAll };
