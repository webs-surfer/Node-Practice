const fs = require("fs");
const model = require("../model/product");
const products = model.products;

exports.getProducts = async (req, res) => {
  const product = await products.find();
  res.json(product);
};
exports.createProduct = async (req, res) => {
  try {
    const product = new products(req.body);
    const saved = await product.save();

    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
exports.getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await products.findById(id);
  res.json(product);
};
exports.updateProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await products.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
exports.patchProductByid = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await products.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
exports.deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await products.findOneAndDelete({ _id: id });
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
