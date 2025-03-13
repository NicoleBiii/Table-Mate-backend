import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import menuRoutes from "./routes/menuRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/api/menu", menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
