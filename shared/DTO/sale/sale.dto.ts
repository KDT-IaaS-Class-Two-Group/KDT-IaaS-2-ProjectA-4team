import ISale from "../../../db/sale/Sale.interface";
import { SaleProductDTO } from "./saleProduct.dto";


export class SaleDTO implements ISale {
  public saleID: number;
  public memberID: string;
  public products: SaleProductDTO; // 단일 객체로 변경
  public saleDate: Date;
  public totalPrice: number;

  constructor(sale: ISale) {
    this.saleID = sale.saleID;
    this.memberID = sale.memberID;
    this.products = new SaleProductDTO(sale.products); // 단일 객체로 처리
    this.saleDate = sale.saleDate;
    this.totalPrice = sale.totalPrice;
  }

  public toJSON(): object {
    return {
      saleID: this.saleID,
      memberID: this.memberID,
      products: this.products.toJSON(), // 단일 객체의 toJSON() 호출
      saleDate: this.saleDate,
      totalPrice: this.totalPrice
    };
  }
}