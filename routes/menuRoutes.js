import express from "express";
import {
  getAllMenuItems,
  getMenuItemById,
  getMenuItemsByCategory,
  searchMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "../controllers/menuControllers.js";
import { verifyAuth } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.get("/", getAllMenuItems);
router.get("/category/:category", getMenuItemsByCategory);
router.get("/search", searchMenuItems);
router.get("/:id", getMenuItemById);

// Admin-only routes
router.post("/", verifyAuth, createMenuItem);
router.put("/:id", verifyAuth, updateMenuItem);
router.delete("/:id", verifyAuth, deleteMenuItem);

export default router;