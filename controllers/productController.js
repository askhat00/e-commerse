const Product = require('../models/product');

exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).send('Product not found');
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.status(200).send('Product deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.addProduct = async (req, res) => { /* Create Product */ };
exports.getProducts = async (req, res) => { /* Read Products */ };
exports.updateProduct = async (req, res) => { /* Update Product */ };
exports.deleteProduct = async (req, res) => { /* Delete Product */ };
