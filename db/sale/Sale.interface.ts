import IMemberID from "../../shared/DTO/sale/interface/MemberID.interface";
import ISaleDate from "../../shared/DTO/sale/interface/SaleDate.interface";
import ISaleID from "../../shared/DTO/sale/interface/SaleID.interface";
import ISaleProducts from "../../shared/DTO/sale/interface/SaleProducts.interface";
import ITotalPrice from "../../shared/DTO/sale/interface/TotalPrice.interface";

/**
 * @crystal23733
 * @date 24.08.23
 * @interface ISale
 * @description 판매를 나타내는 인터페이스입니다.
 * 
 * 이 인터페이스는 판매의 세부 정보를 포함하며, 다른 관련 인터페이스들 (`IMemberID`, `ISaleDate`, `ISaleID`, `ITotalPrice`)을 확장합니다. 
 * 또한, `products` 배열과 `totalPrice`를 포함하여 판매의 상품 목록과 총 가격을 나타냅니다.
 * 
 * @extends IMemberID - 판매에 대한 회원 ID를 포함합니다.
 * @extends ISaleDate - 판매 날짜를 포함합니다.
 * @extends ISaleID - 판매 ID를 포함합니다.
 * @extends ITotalPrice - 총 가격 정보를 포함합니다.
 * 
 * @property {ISaleProducts[]} products - 판매에 포함된 상품 목록입니다.
 * @property {number} totalPrice - 판매의 총 가격입니다.
 * 
 * @method toObject - 인터페이스 인스턴스를 객체로 변환합니다.
 */
export default interface ISale
  extends IMemberID,
    ISaleDate,
    ISaleID,
    ITotalPrice {
  toObject(): any;
  products: ISaleProducts[];
  totalPrice: number;
}
