const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productID: { type: Number, required: true, unique: true },
  productName: { type: String, required: true, unique: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  restockDate: { type: Date },
  expirationDate: { type: Date, required: true },
});
