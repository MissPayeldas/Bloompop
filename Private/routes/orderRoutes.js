

const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new order (protected route)
router.post('/', authMiddleware, createOrder);

// Get all orders (protected route)
router.get('/', authMiddleware, getOrders);

module.exports = router;