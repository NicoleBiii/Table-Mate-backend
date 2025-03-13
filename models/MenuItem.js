import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: {
        cn: { type: String, required: true },
        en: { type: String, required: true },
    },
    description: {
        cn: { type: String },
        en: { type: String },
    },
    price: { type: Number, required: true },
    category: { 
        cn: { type: String, required: true },
        en: { type: String, required: true },
    },
    image: { type: String },
    available: { type: Boolean, default: true }
    },
    { timestamps: true }
);

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
export default MenuItem;
