const mongoose = require("mongoose")

const SaleScheme = new mongoose.Schema({
  saleId : {type : number, required: true, unique: true},
  memberId : {type : string, required: true},
  products : {
    productId: {type : number, required: true, unique: true},
    productName: {type : string, required: true},
    unitPrice: {type: number, required: true},
    quantity: {type: number, required: true},
    totalPrice: {type: number, required: true},
  },
  saleDate: {type :date, required: true}
})
const Sale = mongoose.model("Sale",SaleScheme);

module.exports = Sale