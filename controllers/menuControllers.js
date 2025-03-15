import MenuItem from "../models/MenuItem.js";
import { verifyAuth } from "../middleware/auth.js";


// Get all menu items
export const getAllMenuItems = async (req, res) => {
    try {
      const menuItems = await MenuItem.find();
      res.status(200).json(menuItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Get menu item by ID
export const getMenuItemById = async (req, res) => {
    try {
      const menuItem = await MenuItem.findById(req.params.id);
      if (!menuItem) {
        return res.status(404).json({ message: "Menu item not found" });
      }
      res.status(200).json(menuItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Get menu items by category
export const getMenuItemsByCategory = async (req, res) => {
    try {
      const { category } = req.params;
      const menuItems = await MenuItem.find({ 
        "category.en": { $regex: new RegExp(`^${category}$`, 'i') } // Case-insensitive match
      });
      if (!menuItems || menuItems.length === 0) {
        return res.status(404).json({ message: "No menu items found in this category" });
      }
      res.status(200).json(menuItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Search menu items based on query
export const searchMenuItems = async (req, res) => {
    const { query } = req.query; // Extract the query parameter
    try {
      const menuItems = await MenuItem.find({
        $or: [
          { "name.en": { $regex: query, $options: "i" } },
          { "name.cn": { $regex: query, $options: "i" } },
          { "description.en": { $regex: query, $options: "i" } },
          { "description.cn": { $regex: query, $options: "i" } },
          { "category.en": { $regex: query, $options: "i" } },
          { "category.cn": { $regex: query, $options: "i" } }
        ],
      });
      res.status(200).json(menuItems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Create a new menu item (only admin)
export const createMenuItem = async (req, res) => {
  try {
      const { name, description, price, category } = req.body;
      const image = req.body.image || "";

      if (!name?.cn || !name?.en || !category?.cn || !category?.en) {
          return res.status(400).json({ message: "Both English and Chinese names & categories are required" });
      }

      const newMenuItem = new MenuItem({
          name,
          description,
          price,
          category,
          image
      });

      await newMenuItem.save();
      res.status(201).json(newMenuItem);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

  
  // Update a menu item (only admin)
  export const updateMenuItem = async (req, res) => {
    try {
      const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedMenuItem) {
        return res.status(404).json({ message: "Menu item not found" });
      }
      res.status(200).json(updatedMenuItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Delete a menu item (only admin)
  export const deleteMenuItem = async (req, res) => {
    try {
      const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.id);
      if (!deletedMenuItem) {
        return res.status(404).json({ message: "Menu item not found" });
      }
      res.status(200).json({ message: "Menu item deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };