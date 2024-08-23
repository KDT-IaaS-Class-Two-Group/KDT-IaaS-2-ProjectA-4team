import ISale from "../../../db/sale/Sale.interface";
import { SaleProductDTO } from "./saleProduct.dto";
import { Types } from 'mongoose';

/**
 * * 판매 데이터 전송 객체(DTO) 클래스
 * @crystal23733 24.08.14
 * @class SaleDTO
 * @implements ISale
 * @description `ISale`을 구현하며, 판매 정보를 처리하는 DTO 클래스입니다.
 */
export class SaleDTO implements ISale {
  public _id: string;
  public memberID: Types.ObjectId;
  public products: SaleProductDTO[];
  public saleDate: string;
  public totalPrice: number;

  /**
   * @param sale - `ISale` 인터페이스를 구현한 판매 객체
   */
  constructor(sale: ISale) {
    this._id = sale._id.toString();
    this.memberID = sale.memberID;
    this.products = sale.products.map(product => new SaleProductDTO(product));
    this.saleDate = sale.saleDate;
    this.totalPrice = sale.totalPrice;
  }

  /**
   * * 객체를 JSON 형식으로 변환합니다.
   * @crystal23733 24.08.14
   * @returns JSON 객체
   */
  public toJSON(): object {
    return {
      _id: this._id,
      memberID: this.memberID,
      products: this.products.map(product => product.toJSON()),
      saleDate: this.saleDate,
      totalPrice: this.totalPrice,
    };
  }

  /**
   * * 객체를 일반 객체로 변환합니다.
   * @crystal23733 24.08.14
   * @returns 일반 객체
   */
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