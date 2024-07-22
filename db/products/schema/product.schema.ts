import { Schema } from "mongoose";
import IProduct from "../product.interface";
/**
 * @crystal23733 24.07.22
 * * product schema 정의
 */


const productSchema: Schema<IProduct> = new Schema({
  productID: { type: Number, required: true, unique: true },
  productName: { type: String, required: true, unique: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  restockData: { type: Date },
  expirationDate: { type: Date, required: true },
})