import IProduct from "../../../db/products/product.interface";
import { BaseDTO } from "./base.dto";

// BaseDTO를 상속받아 IProduct의 모든 속성을 포함합니다.
export class ProductDTO extends BaseDTO {
  constructor(product: IProduct) {
    super(
      product._id,
      product.productCategory,
      product.productName,
      product.unitPrice,
      product.quantity,
      product.restockDate, // BaseDTO의 생성자에서 restockDate는 undefined일 수 있습니다.
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
      restockDate:
        this.restockDate instanceof Date
          ? this.restockDate.toISOString()
          : undefined,
      expirationDate:
        this.expirationDate instanceof Date
          ? this.expirationDate.toISOString()
          : undefined,
    };
  }
}
