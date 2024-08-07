import IProduct from "../../../db/products/product.interface";
import { BaseDTO } from "./base.dto";

export class ProductDTO extends BaseDTO {
  constructor(product: IProduct) {
    super(
      product._id,
      product.productCategory,
      product.productName,
      product.unitPrice,
      product.quantity,
      product.restockDate,
      product.expirationDate
    );
  }

  public toJSON() {
    return {
      _id: this._id,
      productCategory: this.productCategory,
      productName: this.productName,
      unitPrice: this.unitPrice,
      quantity: this.quantity,
      restockDate: this.restockDate,
      expirationDate: this.expirationDate,
    };
  }
}
