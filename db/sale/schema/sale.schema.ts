import { Schema } from "mongoose";
import ISale from "../Sale.interface";

/**
 * @crystal23733 24.07.22
 * * sale schema 정의
 */

const saleSchema:Schema<ISale> = new Schema({
  saleID: { type: Number, required: true, unique: true },
  memberID: { type: String, required: true },
  products: {
    productId: { type: Number, required: true, unique: true },
    productName: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  saleDate: { type: Date, required: true },
})

export default saleSchema;