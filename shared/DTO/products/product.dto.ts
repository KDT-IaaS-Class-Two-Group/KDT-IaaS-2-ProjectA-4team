import IProduct from '../../../db/products/product.interface';
import { BaseDTO } from './base.dto';

export class ProductDTO extends BaseDTO {
  public productID: number;
  public productName: string;
  public unitPrice: number;
  public quantity: number;
  public restockDate?: Date;
  public expirationDate: Date;

  constructor(product: IProduct) {
    super(
      product.productID,
      product.productName,
      product.unitPrice,
      product.quantity,
      product.restockData,
      product.expirationDate
    );
    this.productID = product.productID;
    this.productName = product.productName;
    this.unitPrice = product.unitPrice;
    this.quantity = product.quantity;
    this.restockDate = product.restockData;
    this.expirationDate = product.expirationDate;
  }
}