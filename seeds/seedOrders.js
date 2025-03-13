import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Order from "../models/Order.js";
import MenuItem from "../models/MenuItem.js";

dotenv.config();
connectDB();

const seedOrders = async () => {
    try {
        const menuItems = await MenuItem.find().limit(5);
        if (menuItems.length < 5) {
            throw new Error("Please insert enough menu items first");
        }
        
        const orders = [
            {
                tableNumber: 1,
                items: [
                    { menuItem: menuItems[0]._id, quantity: 2 },
                    { menuItem: menuItems[1]._id, quantity: 1 }
                ],
                totalPrice: 45.6,
                status: "pending",
                paymentStatus: "unpaid"
            },
            {
                tableNumber: 2,
                items: [
                    { menuItem: menuItems[2]._id, quantity: 3 }
                ],
                totalPrice: 28.8,
                status: "preparing",
                paymentStatus: "unpaid"
            },
            {
                tableNumber: 3,
                items: [
                    { menuItem: menuItems[3]._id, quantity: 1 },
                    { menuItem: menuItems[4]._id, quantity: 2 }
                ],
                totalPrice: 58.6,
                status: "served",
                paymentStatus: "paid"
            },
            {
                tableNumber: 4,
                items: [
                    { menuItem: menuItems[1]._id, quantity: 2 },
                    { menuItem: menuItems[3]._id, quantity: 1 }
                ],
                totalPrice: 39.6,
                status: "pending",
                paymentStatus: "unpaid"
            },
            {
                tableNumber: 5,
                items: [
                    { menuItem: menuItems[0]._id, quantity: 1 },
                    { menuItem: menuItems[2]._id, quantity: 1 }
                ],
                totalPrice: 26.8,
                status: "completed",
                paymentStatus: "paid"
            }
        ];

        await Order.insertMany(orders);
        console.log("order data seed succcess！");
        mongoose.connection.close();
    } catch (error) {
        console.error("failed seed order data:", error);
        mongoose.connection.close();
    }
};

seedOrders();
