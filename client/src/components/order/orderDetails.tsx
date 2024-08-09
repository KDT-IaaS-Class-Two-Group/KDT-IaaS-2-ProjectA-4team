import React from "react";

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
              key={order._id}
              className="order-details__items flex flex-col mt-4"
            >
              <h2 className="font-semibold text-md">매출 번호: {order._id}</h2>
              {order.products.map((product, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mt-2"
                >
                  <p>{product.productName}</p>
                  <p>
                    {product.unitPrice.toFixed(2)} 원 x {product.quantity}
                  </p>
                  <p>{(product.unitPrice * product.quantity).toFixed(2)} 원</p>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4 font-bold">
                <p>총 가격:</p>
                <p>{order.totalPrice.toFixed(2)} 원</p>
              </div>
              <p className="mt-2">판매 날짜: {order.saleDate}</p>
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
