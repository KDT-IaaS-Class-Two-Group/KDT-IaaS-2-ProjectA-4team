import { Schema } from "mongoose";
import IProduct from "../product.interface";
/**
 * @crystal23733 24.07.22
 * * product schema 정의
 */

const productSchema: Schema<IProduct> = new Schema({
  productCategory: { type: String, required: true },
  productName: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  restockDate: { type: String },
  expirationDate: { type: String, required: true },
});

export default productSchema;
