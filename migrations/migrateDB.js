import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import MenuItem from "../models/MenuItem.js";
import Order from "../models/Order.js";
import User from "../models/User.js";

dotenv.config();
connectDB();

const migrateDB = async () => {
    try {
        console.log("🔄 Starting database migration...");

        await MenuItem.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();

        console.log("🗑️ Database cleared!");

        process.exit();
    } catch (error) {
        console.error("❌ Migration error:", error);
        process.exit(1);
    }
};

migrateDB();
