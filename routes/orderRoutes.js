import express from "express";
import { verifyAuth } from "../middleware/auth"; // Ensure only authenticated users can access
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  updateOrderStatus,
  updatePaymentStatus
} from "../controllers/orderController";

const router = express.Router();

router.post("/", verifyAuth, createOrder); // Create order
router.get("/", verifyAuth, getAllOrders); // Get all orders
router.get("/:id", verifyAuth, getOrderById); // Get order by ID
router.put("/:id", verifyAuth, updateOrder); // Update order
router.delete("/:id", verifyAuth, deleteOrder); // Delete order
router.patch("/:id/status", verifyAuth, updateOrderStatus); // Update order status
router.patch("/:id/payment", verifyAuth, updatePaymentStatus); // Update payment status

export default router;
