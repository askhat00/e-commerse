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

exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { orderStatus: req.body.orderStatus }, { new: true });
    if (!order) return res.status(404).send('Order not found');
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).send('Order not found');
    res.status(200).send('Order deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

