import { client } from "../db/mongodb.js";

const deleteOne = async (req, res) => {
  const user_id = parseInt(req.params.user_id);

  try {
    const db = client.db("user_management");
    const collection = db.collection("users");

    // checking if the USER EXIST or NOT
    const is_exist = await collection.findOne({ user_id: user_id });
    if (!is_exist) {
      return res.status(400).send({ message: "User Not Found!" });
    }

    // deleting the USER
    await collection.deleteOne({ user_id: user_id });

    return res.status(204).send();
  } catch (error) {
    console.log("Error deleting the user: ", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export { deleteOne };
