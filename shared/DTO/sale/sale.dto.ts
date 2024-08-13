import ISale from "../../../db/sale/Sale.interface";
import { SaleProductDTO } from "./saleProduct.dto";
import { Types } from 'mongoose';

export class SaleDTO implements ISale {
  public _id: string;
  public memberID: Types.ObjectId;
  public products: SaleProductDTO[];
  public saleDate: string;
  public totalPrice: number;

  constructor(sale: ISale) {
    this._id = sale._id.toString();
    this.memberID = sale.memberID;
    this.products = sale.products.map(product => new SaleProductDTO(product));
    this.saleDate = sale.saleDate;
    this.totalPrice = sale.totalPrice;
  }

  public toJSON(): object {
    return {
      _id: this._id,
      memberID: this.memberID,
      products: this.products.map(product => product.toJSON()),
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