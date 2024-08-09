import React from "react";
import OrderDetailsProps from "src/interfaces/components/order/OrderDetails.interface";

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
