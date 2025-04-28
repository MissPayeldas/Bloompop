

const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get all products
router.get('/', getProducts);

// Create a new product (protected route)
router.post('/', authMiddleware, createProduct);

module.exports = router;