import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs"; 
import connectDB from "../config/db.js";
import User from "../models/User.js";

dotenv.config();
connectDB();

const createUsers = async () => {
  try {
    const users = [
      {
        username: "testuser",
        password: "Test@1234",
      },
      {
        username: "demo_user",
        password: "Demo@5678",
      },
      {
        username: "admin_demo",
        password: "Admin@2023",
      },
    ];

    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 12;
    const hashedUsers = await Promise.all(
      users.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, saltRounds),
      }))
    );

    const createdUsers = await User.insertMany(hashedUsers);
    console.log(`✅ Successfully created ${createdUsers.length} users`);

    createdUsers.forEach((user) => {
      console.log(`🆔 ID: ${user._id} | 👤 user name: ${user.username}`);
    });
    process.exit();
  } catch (error) {
    console.error("❌ Failed to create seed data:", error);
    process.exit(1);
  }
};


createUsers();