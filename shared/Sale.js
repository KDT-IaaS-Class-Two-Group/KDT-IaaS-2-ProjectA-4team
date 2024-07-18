const mongoose = require("mongoose");

const SaleScheme = new mongoose.Schema({
  saleId: { type: Number, required: true, unique: true },
  memberId: { type: String, required: true },
  products: {
    productId: { type: Number, required: true, unique: true },
    productName: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  saleDate: { type: Date, required: true },
});
const Sale = mongoose.model("Sale", SaleScheme);

module.exports = Sale;
