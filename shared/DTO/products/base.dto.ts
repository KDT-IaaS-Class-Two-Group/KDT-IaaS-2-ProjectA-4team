/**
 * @crystal23733 24.07.22
 * 기본 추상 클래스
 */

export abstract class BaseDTO {
  public _id: string;
  public productCategory: string;
  public productName: string;
  public unitPrice: number;
  public quantity: number;
  public restockDate: string;
  public expirationDate: string;

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
