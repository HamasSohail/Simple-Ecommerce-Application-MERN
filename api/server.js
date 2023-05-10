const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const product = require("./models/products.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/productsDB")
  .then(console.log("MongoDB is connected with productsDB"))
  .catch((err) => {
    console.error(err);
  });

app.get("/", async (req, res) => {
  const products = await product.find();
  res.json(products);
});

app.post("/new/product", (req, res) => {
  const New = new product({
    name: req.body.name,
    ImageUrl: req.body.ImageUrl,
    Price: req.body.Price,
  });

  New.save();

  res.json(New);
});

app.delete("/product/delete/:id", async (req, res) => {
  const Delete = await product.findByIdAndDelete({ "_id": req.params.id });
  res.json(Delete);
});

app.listen("3001", (req, res) => {
  console.log("Server is up and running at port 3001");
});
