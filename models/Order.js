import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        tableNumber: { type: Number, required: true },
        items: [
            {
                menuItem: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem", required: true },
                quantity: { type: Number, required: true }
            }
        ],
        totalPrice: { type: Number, required: true },
        status: { 
            type: String, 
            enum: ["pending", "preparing", "served", "completed"], 
            default: "pending" 
        },
        paymentStatus: { 
            type: String, 
            enum: ["unpaid", "paid"], 
            default: "unpaid" 
        } 
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
