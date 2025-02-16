const Order = require('../models/order');
exports.createOrder = async (req, res) => {
  try {
    const order = new Order({ userId: req.user.id, productIds: req.body.productIds });
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate('productIds');
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
