import Order from "../models/Order";
import MenuItem from "../models/MenuItem";


export const createOrder = async (req, res) => {
  try {
    const { tableNumber, items } = req.body;

    // Check if menu items exist and calculate total price
    let totalPrice = 0;
    for (let item of items) {
      const menuItem = await MenuItem.findById(item.menuItem);
      if (!menuItem) {
        return res.status(404).json({ message: `MenuItem with ID ${item.menuItem} not found` });
      }
      totalPrice += menuItem.price * item.quantity;
    }

    const newOrder = new Order({ tableNumber, items, totalPrice });
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("items.menuItem"); // Populate menuItem details
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Get a single order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("items.menuItem");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Update an order (modify items, table number, etc.)
export const updateOrder = async (req, res) => {
  try {
    const { tableNumber, items } = req.body;

    let totalPrice = 0;
    for (let item of items) {
      const menuItem = await MenuItem.findById(item.menuItem);
      if (!menuItem) {
        return res.status(404).json({ message: `MenuItem with ID ${item.menuItem} not found` });
      }
      totalPrice += menuItem.price * item.quantity;
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { tableNumber, items, totalPrice },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Delete an order
export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Change order status (pending → preparing → served → completed)
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ["pending", "preparing", "served", "completed"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Change payment status (unpaid → paid)
export const updatePaymentStatus = async (req, res) => {
  try {
    const { paymentStatus } = req.body;

    if (!["unpaid", "paid"].includes(paymentStatus)) {
      return res.status(400).json({ message: "Invalid payment status value" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { paymentStatus },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
