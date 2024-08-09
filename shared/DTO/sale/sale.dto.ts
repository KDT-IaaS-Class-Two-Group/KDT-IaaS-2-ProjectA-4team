import ISale from "../../../db/sale/Sale.interface";
import { SaleProductDTO } from "./saleProduct.dto";

export class SaleDTO implements ISale {
  public _id: string; // ObjectId를 문자열로 처리
  public memberID: string;
  public products: SaleProductDTO[]; 
  public saleDate: string; // Date를 string으로 처리
  public totalPrice: number;

  constructor(sale: ISale) {
    this._id = sale._id.toString(); // ObjectId를 문자열로 변환
    this.memberID = sale.memberID;
    this.products = sale.products.map((product: any) => new SaleProductDTO(product)); // 배열로 변환
    this.saleDate = sale.saleDate;
    this.totalPrice = sale.totalPrice;
  }

  public toJSON(): object {
    return {
      _id: this._id,
      memberID: this.memberID,
      products: this.products.map(product => product.toJSON()), // 배열로 변환
      saleDate: this.saleDate,
      totalPrice: this.totalPrice,
    };
  }

  public toObject(): object {
    return {
      _id: this._id,
      memberID: this.memberID,
      products: this.products,
      saleDate: this.saleDate,
      totalPrice: this.totalPrice,
    };
  }
}
