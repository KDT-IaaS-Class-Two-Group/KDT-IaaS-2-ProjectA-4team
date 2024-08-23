import IProduct from "../../../db/products/product.interface";
import { BaseDTO } from "./base.dto";

/**
 * * ProductDTO 클래스
 * @crystal23733 24.07.22
 * @description `BaseDTO`를 상속받아 `IProduct`의 모든 속성을 포함하며, 제품 정보를 처리하는 DTO 클래스입니다.
 */
export class ProductDTO extends BaseDTO {
  /**
   * @param product - `IProduct` 인터페이스를 구현한 제품 객체
   */
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

  /**
   * * 객체를 JSON 형식으로 변환합니다.
   * @crystal23733 24.07.22
   * @returns JSON 객체
   */
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