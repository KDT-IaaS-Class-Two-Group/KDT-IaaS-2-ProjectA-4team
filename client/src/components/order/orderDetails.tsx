import React from "react";
import { ClientSaleDTO } from "@shared/DTO/sale/clientSale.interface";

interface OrderDetailsProps {
  orderDetails: ClientSaleDTO[];
  error: string | null;
}

/**
 * `OrderDetails`
 *
 * 이 컴포넌트는 주문 내역을 표시하는 UI를 렌더링합니다. 주문 내역은 `ClientSaleDTO` 객체 배열로 제공되며,
 * 각 주문의 세부 정보를 표시합니다. 주문이 없는 경우 적절한 메시지를 표시하며, 오류가 있는 경우에는 오류 메시지도 표시합니다.
 *
 * @component
 *
 * @param {OrderDetailsProps} props - `OrderDetails` 컴포넌트에 전달되는 속성입니다.
 * @param {ClientSaleDTO[]} props.orderDetails - 주문 내역을 포함하는 배열입니다. 각 주문은 `ClientSaleDTO` 타입으로 구성됩니다.
 * @param {string | null} props.error - 오류 메시지를 포함하는 문자열입니다. 오류가 없으면 `null`입니다.
 *
 * @returns {JSX.Element} - 주문 내역을 표시하는 JSX 요소를 반환합니다.
 *
 * @description
 * - **주문 내역 표시**: `orderDetails` 배열을 순회하며 각 주문의 세부 정보를 표시합니다. 각 주문은 고유한 매출 번호를 가지고 있으며,
 *   제품 목록, 총 가격, 판매 날짜 등의 정보를 포함합니다.
 * - **오류 처리**: `error`가 존재할 경우 오류 메시지를 화면에 표시합니다.
 * - **UI 구성**: 주문 내역은 스크롤 가능한 영역 안에 표시되며, 제품의 이름, 가격, 수량, 총 가격, 판매 날짜 등이 명확하게 나타납니다.
 * - **조건부 렌더링**: `orderDetails` 배열이 비어있을 경우 "주문 내역이 없습니다."라는 메시지를 표시합니다.
 *
 * @crystal23733
 * @date 24.08.07
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
