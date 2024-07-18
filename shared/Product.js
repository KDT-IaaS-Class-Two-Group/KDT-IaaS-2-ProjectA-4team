/**
 * @yuxincxoi 24.07.18
 * * 제품정보 Collection 생성
 */

const mongoose = require("mongoose");

// * Product 스키마 정의
const productSchema = new mongoose.Schema({
  productID: { type: Number, required: true, unique: true },
  productName: { type: String, required: true, unique: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  restockDate: { type: Date },
  expirationDate: { type: Date, required: true },
});

// * Product 모델 생성
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
