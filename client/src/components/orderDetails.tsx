import React from "react";

interface Order {
  saleID: string;
  products: {
    productName: string;
    unitPrice: number;
  };
  saleData: string;
}

interface OrderDetailsProps {
  orderDetails: Order[];
  error: string | null;
}

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
              <p>{order.saleData}</p>
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
