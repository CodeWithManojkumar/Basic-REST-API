import express from "express";
import {
  createUser,
  getUser,
  getUserbyID,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", getUserbyID);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
