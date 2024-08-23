import React from "react";
import { ClientSaleDTO } from "@shared/DTO/sale/clientSale.interface";

/**
 * `OrderDetailsProps` 인터페이스는 `OrderDetails` 컴포넌트에 전달되는 props의 타입을 정의합니다.
 *
 * @interface
 * @crystal23733
 * @date 24.08.02
 *
 * @property {ClientSaleDTO[]} orderDetails - 주문 내역을 포함하는 배열입니다. 각 항목은 `ClientSaleDTO` 타입으로, 판매와 관련된 정보를 담고 있습니다.
 * @property {string | null} error - 오류 메시지를 나타내는 문자열입니다. 오류가 없으면 `null`입니다.
 */
interface OrderDetailsProps {
  /**
   * 주문 내역을 포함하는 배열입니다.
   * @type {ClientSaleDTO[]}
   */
  orderDetails: ClientSaleDTO[];

  /**
   * 오류 메시지를 나타내는 문자열입니다. 오류가 없으면 `null`입니다.
   * @type {string | null}
   */
  error: string | null;
}

/**
 * `OrderDetails` 컴포넌트는 주문 내역을 표시하는 컴포넌트입니다.
 *
 * 이 컴포넌트는 `orderDetails`와 `error`를 props로 받아, 주문 내역을 렌더링합니다. 주문 내역이 없는 경우에는 해당 메시지를 표시하며,
 * 오류가 있을 경우에는 오류 메시지를 표시합니다.
 *
 * @component
 * @param {OrderDetailsProps} props - `OrderDetails` 컴포넌트에 전달되는 props입니다.
 * @returns {JSX.Element} - 주문 내역을 표시하는 JSX 요소를 반환합니다.
 * @crystal23733
 * @date 24.08.02
 */
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
