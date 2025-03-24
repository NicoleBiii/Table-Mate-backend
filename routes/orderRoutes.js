import express from "express";
import { verifyAuth } from "../middleware/auth.js"; // Ensure only authenticated users can access
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  updateOrderStatus,
  updatePaymentStatus
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/",createOrder); // Create order
router.get("/:id", getOrderById); // Get order by ID
router.put("/:id", updateOrder); // Update order

router.get("/", verifyAuth, getOrders); // Get all orders
router.delete("/:id", verifyAuth, deleteOrder); // Delete order
router.patch("/:id/status",   verifyAuth, updateOrderStatus); // Update order status
router.patch("/:id/payment",  verifyAuth, updatePaymentStatus); // Update payment status

export default router;
