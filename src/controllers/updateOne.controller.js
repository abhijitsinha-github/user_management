import { client } from "../db/mongodb.js";
import { extraFields } from "../models/extraFields.model.js";
import { typeChecks } from "../models/typeCheck.model.js";

const updateOne = async (req, res) => {
  try {
    // checking if the USER already EXIST
    const user_id = parseInt(req.params.user_id);
    const db = client.db("user_management");
    const collection = db.collection("users");
    const is_exist = await collection.findOne({ user_id: user_id });

    if (!is_exist) {
      return res.status(404).send({ message: "User not found" });
    }

    // checking for any  Extra Fields & any typeof ERRORS
    const is_insert = false;
    const is_update = true;
    const extraField = extraFields(req, res, is_insert, is_update);
    const typeCheck = typeChecks(req, res, is_insert, is_update);

    if (extraField.length > 0 || typeCheck.length > 0) {
      return res.status(400).send({
        extra_field: extraField.join(", ") || "Null",
        typeof_error: typeCheck.join(", ") || "Null",
      });
    }

    // updating data if no error found
    await collection.updateOne({ user_id: user_id }, { $set: req.body });

    return res.status(200).send({
      message: "User updates successfully!",
      "updated data": req.body,
    });
  } catch (error) {
    console.log("Error updating the user: ", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export { updateOne };
