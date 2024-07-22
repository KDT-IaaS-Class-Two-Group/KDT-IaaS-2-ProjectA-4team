/**
 * @crystal23733 24.07.22
 * 기본 추상 클래스
 */

export abstract class BaseDTO {
  protected productID: number;
  protected productName: string;
  protected unitPrice: number;
  protected quantity: number;
  protected restockDate?: Date;
  protected expirationDate: Date;

  constructor(
    productID: number,
    productName: string,
    unitPrice: number,
    quantity: number,
    restockDate: Date | undefined,
    expirationDate: Date
  ) {
    this.productID = productID;
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.restockDate = restockDate;
    this.expirationDate = expirationDate;
  }

  public toJSON(): object {
    return {
      productID: this.productID,
      productName: this.productName,
      unitPrice: this.unitPrice,
      quantity: this.quantity,
      restockDate: this.restockDate,
      expirationDate: this.expirationDate,
    };
  }
}