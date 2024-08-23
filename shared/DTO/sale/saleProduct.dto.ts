import { Types } from "mongoose";
import ISaleProducts from "./interface/SaleProducts.interface";

/**
 * * 판매 제품 데이터 전송 객체(DTO) 클래스
 * @crystal23733 24.07.22
 * @class SaleProductDTO
 * @implements ISaleProducts
 * @description 제품의 판매 정보를 처리하는 DTO 클래스입니다.
 */
export class SaleProductDTO implements ISaleProducts {
  public _id: Types.ObjectId;
  public productID: Types.ObjectId;
  public quantity: number;
  public productName: string;
  public unitPrice: number;

  /**
   * @param product - `ISaleProducts` 인터페이스를 구현한 제품 객체
   */
  constructor(product: ISaleProducts) {
    this._id = product._id;
    this.productID = product.productID;
    this.quantity = product.quantity;
    this.productName = product.productName;
    this.unitPrice = product.unitPrice;
  }

  /**
   * * 객체를 JSON 형식으로 변환합니다.
   * @crystal23733 24.07.22
   * @returns JSON 객체
   */
  public toJSON(): object {
    return {
      _id: this._id,
      productID: this.productID,
      quantity: this.quantity,
      unitPrice: this.unitPrice,
    };
  }
}