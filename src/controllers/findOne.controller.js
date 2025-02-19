import { client } from "../db/mongodb.js";

const findOne = async (req, res) => {
  const user_id = req.params.user_id;

  try {
    const db = client.db("user_management");
    const collection = db.collection("users");

    // finding the user
    const findUser = await collection.findOne({ user_id: parseInt(user_id) });
    if (!findUser) {
      return res.status(204).send();
    }

    return res.status(200).send({ message: "User Found!", data: findUser });
  } catch (error) {
    console.log("Error retriving user: ", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export { findOne };
