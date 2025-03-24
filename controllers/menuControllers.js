import MenuItem from "../models/MenuItem.js";
import { verifyAuth } from "../middleware/auth.js"; //现在先不做登陆功能，忽略


// Get all menu items
export const getAllMenuItems = async (req, res) => {
  try {
      const lang = req.query.lang || "en"; // Default to English
      const menuItems = await MenuItem.find();

      const formattedItems = menuItems.map(item => ({
          id: item._id,
          name: item.name[lang] || item.name.en, // Default to English if the requested language is missing
          description: item.description[lang] || item.description.en,
          price: item.price,
          category: item.category[lang] || item.category.en,
          image: item.image,
          available: item.available
      }));

      res.status(200).json(formattedItems);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Get menu item by ID
export const getMenuItemById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const menuItem = await MenuItem.findById(id);
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }


    const formattedItem = {
      id: menuItem._id,
      name: menuItem.name,
      description: menuItem.description || { cn: '', en: '' },
      category: menuItem.category,
      price: menuItem.price,
      image: menuItem.image,
      available: menuItem.available
    };

    res.status(200).json(formattedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get menu items by category
export const getMenuItemsByCategory = async (req, res) => {
  try {
      const { category } = req.params;
      const lang = req.query.lang || "en";

      const menuItems = await MenuItem.find({ [`category.${lang}`]: { $regex: new RegExp(`^${category}$`, 'i') } });

      if (!menuItems || menuItems.length === 0) {
          return res.status(404).json({ message: "No menu items found in this category" });
      }

      const formattedItems = menuItems.map(item => ({
          id: item._id,
          name: item.name[lang] || item.name.en,
          description: item.description[lang] || item.description.en,
          price: item.price,
          category: item.category[lang] || item.category.en,
          image: item.image,
          available: item.available
      }));

      res.status(200).json(formattedItems);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Search menu items based on query
export const searchMenuItems = async (req, res) => {
  try {
      const { query, lang = "en" } = req.query; // Extract query and language parameter

      const menuItems = await MenuItem.find({
          $or: [
              { [`name.${lang}`]: { $regex: query, $options: "i" } },
              { [`description.${lang}`]: { $regex: query, $options: "i" } },
              { [`category.${lang}`]: { $regex: query, $options: "i" } }
          ],
      });

      const formattedItems = menuItems.map(item => ({
          id: item._id,
          name: item.name[lang] || item.name.en,
          description: item.description[lang] || item.description.en,
          price: item.price,
          category: item.category[lang] || item.category.en,
          image: item.image,
          available: item.available
      }));

      res.status(200).json(formattedItems);
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