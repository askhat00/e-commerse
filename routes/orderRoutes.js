const express = require('express');
const { createOrder, getUserOrders, updateOrder, deleteOrder } = require('../controllers/orderController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createOrder);

router.get('/', auth, getUserOrders);

router.put('/:id', auth, updateOrder);

router.delete('/:id', auth, deleteOrder);

module.exports = router;
