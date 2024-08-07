import React from "react";

/**
 * @crystal23733 24.08.01
 * @interface Order 매출 상품 객체를 정의하는 인터페이스
 * @property {saleID} - 매출 번호
 * @property {products} - 상품 정보 객체
 * @property {saleDate} - 상품이 판매된 날짜
 */
interface Order {
  saleID: string;
  products: {
    productName: string;
    unitPrice: number;
  };
  saleDate: string;
}

/**
 * @crystal23733 24.08.01
 * @interface OrderDetailsProps 컴포넌트를 정의하는 인터페이스
 * @property {orderDetails} - 위의 Order인터페이스 상속
 * @property {error} - 에러 타입 정의
 */
interface OrderDetailsProps {
  orderDetails: Order[];
  error: string | null;
}

/**
 * @crystal23733 24.08.01
 * @returns {JSXElement} - 주문내역 컴포넌트
 */
const OrderDetails: React.FC<OrderDetailsProps> = ({ orderDetails, error }) => {
  return (
    <div id="order-details" className="h-50% w-full">
      <div id="order-details__header">
        <h1 className="font-bold text-lg">주문내역</h1>
      </div>
      <div
        id="order-details__content"
        className="flex flex-col h-full overflow-y-scroll"
      >
        {orderDetails.length > 0 ? (
          orderDetails.map((order) => (
            <div
              key={order.saleID}
              className="order-details__items flex justify-around items-center mt-4"
            >
              <p>{order.products.productName}</p>
              <p>{order.products.unitPrice} 원</p>
              <p>{order.saleDate}</p>
            </div>
          ))
        ) : (
          <p>주문 내역이 없습니다.</p>
        )}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default OrderDetails;
