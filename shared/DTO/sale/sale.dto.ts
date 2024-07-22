
import ISale from "../../../db/Sale.interface";
import { SaleProductDTO } from "./saleProduct.dto";


export class SaleDTO implements ISale {
  public saleID: number;
  public memberID: string;
  public products: SaleProductDTO[];
  public saleDate: Date;
  public totalPrice: number;

  constructor(sale: ISale) {
    this.saleID = sale.saleID;
    this.memberID = sale.memberID;
    this.products = sale.products.map(product => new SaleProductDTO(product));
    this.saleDate = sale.saleDate;
    this.totalPrice = sale.totalPrice;
  }

  public toJSON(): object {
    return {
      saleID: this.saleID,
      memberID: this.memberID,
      products: this.products.map(product => product.toJSON()),
      saleDate: this.saleDate,
      totalPrice: this.totalPrice
    };
  }
}