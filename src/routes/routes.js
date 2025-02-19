import { Router } from "express";

const router = Router();

// INSERT ROUTE
import { insertOne } from "../controllers/insertOne.controller.js";
router.route("/").post(insertOne);

// FIND ROUTE
import { findAll } from "../controllers/findAll.controller.js";
import { findOne } from "../controllers/findOne.controller.js";

router.route("/").get(findAll);
router.route("/:user_id").get(findOne);

// UPDATE ROUTE
import { updateOne } from "../controllers/updateOne.controller.js";
router.route("/:user_id").put(updateOne);

// DELETE ROUTE
import { deleteOne } from "../controllers/deleteOne.controller.js";
router.route("/:user_id").delete(deleteOne);

export default router;
