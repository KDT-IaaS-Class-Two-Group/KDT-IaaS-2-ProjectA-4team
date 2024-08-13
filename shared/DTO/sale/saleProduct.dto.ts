// src/dtos/product.dto.ts
import { Types } from "mongoose";
import ISaleProducts from "./interface/SaleProducts.interface";

export class SaleProductDTO implements ISaleProducts {
  public _id: Types.ObjectId;
  public productID: Types.ObjectId;
  public quantity: number;
  public productName: string;
  public unitPrice: number;

  constructor(product: ISaleProducts) {
    this._id = product._id;
    this.productID = product.productID;
    this.quantity = product.quantity;
    this.productName = product.productName
    this.unitPrice = product.unitPrice
  }

  public toJSON(): object {
    return {
      _id: this._id,
      productID: this.productID,
      quantity: this.quantity,
      unitPrice: this.unitPrice
    };
  }
}
