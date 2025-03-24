import express from "express";
import multer from "multer";
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
    cb(null, "uploads/"); // save file
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // make sure file name is unique
  },
});

const upload = multer({ storage });

// upload route
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    console.log('receive file upload request:', req.file);
    
    if (!req.file) {
      console.log('no file received');
      return res.status(400).json({ message: "No file uploaded" });
    }
    
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(req.file.mimetype)) {
      console.log('Unsupported file type:', req.file.mimetype);
      return res.status(400).json({ message: "Invalid file type" });
    }

    console.log('file saved successful:', req.file.path);
    res.json({ 
      imageUrl: `/uploads/${req.file.filename}`
    });
  } catch (error) {
    console.error('error upload:', error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Public routes
router.get("/", getAllMenuItems);
router.get("/category/:category", getMenuItemsByCategory);
router.get("/search", searchMenuItems);
router.get("/:id", getMenuItemById);

// Admin-only routes
router.post("/",   verifyAuth,createMenuItem);
router.put("/:id", verifyAuth, updateMenuItem);
router.delete("/:id",  verifyAuth,  deleteMenuItem);

export default router;