

const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all orders
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('items.productId');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};