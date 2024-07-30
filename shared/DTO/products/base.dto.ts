/**
 * @crystal23733 24.07.22
 * 기본 추상 클래스
 */

export abstract class BaseDTO {
  protected productID: number;
  protected productCategory: string;
  protected productName: string;
  protected unitPrice: number;
  protected quantity: number;
  protected restockDate?: Date;
  protected expirationDate: Date;

  constructor(
    productID: number,
    productCategory: string,
    productName: string,
    unitPrice: number,
    quantity: number,
    restockDate: Date | undefined,
    expirationDate: Date
  ) {
    this.productID = productID;
    this.productCategory = productCategory;
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.restockDate = restockDate;
    this.expirationDate = expirationDate;
  }

  public toJSON(): object {
    return {
      productID: this.productID,
      productCategory: this.productCategory,
      productName: this.productName,
      unitPrice: this.unitPrice,
      quantity: this.quantity,
      restockDate: this.restockDate,
      expirationDate: this.expirationDate,
    };
  }
}
