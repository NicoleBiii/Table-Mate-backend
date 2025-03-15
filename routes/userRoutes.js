import express from "express";
import { verifyAuth } from "../middleware/auth";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/userController";

const router = express.Router();

// Admin-only routes (Authenticated users can access these)
router.get("/", verifyAuth, getAllUsers); // Get all users
router.get("/:id", verifyAuth, getUserById); // Get user by ID
router.post("/", verifyAuth, createUser); // Create new user
router.put("/:id", verifyAuth, updateUser); // Update user
router.delete("/:id", verifyAuth, deleteUser); // Delete user

export default router;
