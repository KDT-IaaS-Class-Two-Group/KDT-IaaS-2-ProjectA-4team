/**
 * * 기본 추상 클래스
 * @crystal23733 24.07.22
 * @description 데이터 전송 객체(DTO)의 기본 클래스로, 공통 속성과 메서드를 정의합니다.
 */
export abstract class BaseDTO {
  public _id: string;
  public productCategory: string;
  public productName: string;
  public unitPrice: number;
  public quantity: number;
  public restockDate: string;
  public expirationDate: string;

  /**
   * @param _id - 제품의 고유 ID
   * @param productCategory - 제품 카테고리
   * @param productName - 제품 이름
   * @param unitPrice - 단가
   * @param quantity - 수량
   * @param restockDate - 재입고 날짜
   * @param expirationDate - 만료 날짜
   */
  constructor(
    _id: string,
    productCategory: string,
    productName: string,
    unitPrice: number,
    quantity: number,
    restockDate: string,
    expirationDate: string
  ) {
    this._id = _id;
    this.productCategory = productCategory;
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.restockDate = restockDate;
    this.expirationDate = expirationDate;
  }

  /**
   * * 객체를 JSON 형식으로 변환합니다.
   * @crystal23733 24.07.22
   * @returns JSON 객체
   */
  public toJSON(): object {
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