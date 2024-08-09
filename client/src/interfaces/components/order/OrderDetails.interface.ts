/**
 * @crystal23733 24.08.01
 * @interface Order 매출 상품 객체를 정의하는 인터페이스
 * @property {saleID} - 매출 번호
 * @property {products} - 상품 정보 객체
 * @property {saleDate} - 상품이 판매된 날짜
 */
interface Order {
  _id: string;
  products: {
    productName: string;
    unitPrice: number;
    quantity: number;
  }[];
  saleDate: string;
  totalPrice: number; // 총 가격 추가
}

/**
 * @crystal23733 24.08.01
 * @interface OrderDetailsProps 컴포넌트를 정의하는 인터페이스
 * @property {orderDetails} - 위의 Order인터페이스 상속
 * @property {error} - 에러 타입 정의
 */
export default interface OrderDetailsProps {
  orderDetails: Order[];
  error: string | null;
}
