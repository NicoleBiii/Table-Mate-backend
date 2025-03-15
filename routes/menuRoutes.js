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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // 存到 `uploads/` 目录
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // 确保文件名唯一
  },
});

const upload = multer({ storage });

router.post("/upload", verifyAuth, upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});


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