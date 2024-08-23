import { Types } from 'mongoose';

/**
 * * 클라이언트에서 사용되는 제품 정보 인터페이스
 * @crystal23733 24.08.14
 * @interface ClientProduct
 * @property {_id} - 제품의 고유 ID
 * @property {productID} - 제품 상세 정보
 * @property {quantity} - 제품의 구매 수량
 */
interface ClientProduct {
  _id: Types.ObjectId;
  productID: {
    _id: Types.ObjectId;
    productName: string;
    unitPrice: number;
  };
  quantity: number;
}

/**
 * * 클라이언트에서 사용되는 판매 데이터 전송 객체(DTO) 인터페이스
 * @crystal23733 24.08.14
 * @interface ClientSaleDTO
 * @property {_id} - 판매의 고유 ID
 * @property {memberID} - 판매를 수행한 회원의 ID
 * @property {products} - 판매된 제품들의 정보
 * @property {saleDate} - 판매 날짜
 * @property {totalPrice} - 총 판매 금액
 */
export interface ClientSaleDTO {
  _id: string;
  memberID: Types.ObjectId;
  products: ClientProduct[];
  saleDate: string;
  totalPrice: number;
}