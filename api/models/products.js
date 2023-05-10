const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  ImageUrl: String,
  Price: String
});

const product = mongoose.model("product", productSchema);

module.exports = product;
