// src/dtos/product.dto.ts

import ISaleProducts from "./interface/SaleProducts.interface";

export class SaleProductDTO implements ISaleProducts {
  public _id: string;
  public productID: number | undefined;
  public productName: string;
  public unitPrice: number;
  public quantity: number;
  public totalPrice: number;

  constructor(product: ISaleProducts) {
    this._id = product._id;
    this.productID = product.productID;
    this.productName = product.productName;
    this.unitPrice = product.unitPrice;
    this.quantity = product.quantity;
    this.totalPrice = product.totalPrice;
  }

  public toJSON(): object {
    return {
      productID: this.productID,
      productName: this.productName,
      unitPrice: this.unitPrice,
      quantity: this.quantity,
      totalPrice: this.totalPrice,
    };
  }
}
