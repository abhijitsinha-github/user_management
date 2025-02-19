import { client } from "../db/mongodb.js";
import { missingFields } from "../models/missingFields.model.js";
import { typeChecks } from "../models/typeCheck.model.js";
import { extraFields } from "../models/extraFields.model.js";

const insertOne = async (req, res) => {
  try {
    // checking for any Missing Fields,  Extra Fields & any typeof ERRORS
    const is_insert = true;
    const is_update = false;
    const missingField = missingFields(req, res);
    const typeCheck = typeChecks(req, res, is_insert, is_update);
    const extraField = extraFields(req, res, is_insert, is_update);
    if (
      missingField.length > 0 ||
      typeCheck.length > 0 ||
      extraField.length > 0
    ) {
      return res.status(400).send({
        missing_field: missingField.join(", ") || "Null",
        typeof_error: typeCheck.join(", ") || "Null",
        extra_field: extraField.join(", ") || "Null",
      });
    }

    const data = req.body;
    const db = client.db("user_management");
    const collection = db.collection("users");
    // creating user_id as UNIQUE INDEX & inserting USER DATA into DB
    await collection.createIndex({ user_id: 1 }, { unique: true });
    await collection.insertOne(data);
    return res.status(200).send({
      message: "User Created",
      data: data,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send({ message: "User ID already exist" });
    } else {
      console.log("Error creating the user: ", error);
      return res.status(500).send({ message: "Internal Server Error" });
    }
  }
};

export { insertOne };
