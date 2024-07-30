import IProduct from "../../../db/products/product.interface";
import { BaseDTO } from "./base.dto";

export class ProductDTO extends BaseDTO {
  public productID: number;
  public productCategory: string;
  public productName: string;
  public unitPrice: number;
  public quantity: number;
  public restockDate?: Date;
  public expirationDate: Date;

  constructor(product: IProduct) {
    super(
      product.productID,
      product.productCategory,
      product.productName,
      product.unitPrice,
      product.quantity,
      product.restockDate,
      product.expirationDate
    );
    this.productID = product.productID;
    this.productCategory = product.productCategory;
    this.productName = product.productName;
    this.unitPrice = product.unitPrice;
    this.quantity = product.quantity;
    this.restockDate = product.restockDate;
    this.expirationDate = product.expirationDate;
  }
}
