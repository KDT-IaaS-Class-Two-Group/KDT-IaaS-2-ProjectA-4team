import React from "react";
import { ClientSaleDTO } from "@shared/DTO/sale/clientSale.interface";

interface OrderDetailsProps {
  orderDetails: ClientSaleDTO[];
  error: string | null;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderDetails, error }) => {
  return (
    <div id="order-details" className="h-50% w-full overflow-y-scroll">
      <div id="order-detailsheader">
        <h1 className="text-lg font-bold">주문내역</h1>
      </div>
      <div id="order-detailscontent" className="flex flex-col h-full">
        {orderDetails.length > 0 ? (
          orderDetails.map((order) => (
            <div
              key={order._id}
              className="flex flex-col mt-4 order-details__items"
            >
              <hr />
              <br />
              <h2 className="font-semibold text-md">매출 번호: {order._id}</h2>
              {order.products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mt-2"
                >
                  <p>{product.productID.productName}</p>
                  <p>
                    {product.productID.unitPrice} 원 x {product.quantity}
                  </p>
                  <p>{product.productID.unitPrice * product.quantity} 원</p>
                </div>
              ))}
              <div className="flex items-center justify-between mt-4 font-bold">
                <p>총 가격:</p>
                <p>{order.totalPrice} 원</p>
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
