import { ClientSaleDTO } from "@shared/DTO/sale/clientSale.interface";
import { useEffect, useState } from "react";
import orderFetch from "src/model/order/orderFetch";
import { getOrderListErrMessage } from "static/hooks/order/orderHook.static";

/**
 * @crystal23733
 * @date 24.08.01
 *
 * `useOrderHook` 훅은 사용자의 이메일을 기반으로 주문 데이터를 가져오고 상태를 관리합니다.
 * 이 훅은 비동기로 주문 데이터를 가져오며, 데이터를 변환하여 상태로 저장합니다.
 * 데이터 로딩 상태와 에러 메시지를 반환하여 컴포넌트에서 사용자에게 적절한 정보를 제공합니다.
 *
 * @param {string} email - 주문 데이터를 가져오기 위한 사용자 이메일.
 * @returns {{
 *   orderDetails: ClientSaleDTO[],  // 주문 데이터 배열, 성공적으로 가져온 경우
 *   error: string | null,           // 에러 메시지, 오류가 발생한 경우
 *   loading: boolean                // 데이터 로딩 상태, 로딩 중이면 true, 로딩 완료되면 false
 * }}
 */
const useOrderHook = (email: string) => {
  const [orderDetails, setOrderDetails] = useState<ClientSaleDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * 주문 세부 정보를 비동기로 가져오고 상태를 업데이트하는 함수입니다.
   * 이메일이 없으면 아무 작업도 하지 않습니다.
   * 주문 데이터를 가져와서 날짜 형식을 변환하고 상태를 업데이트합니다.
   * 오류가 발생하면 에러 메시지를 설정합니다.
   *
   * @crystal23733
   * @date 24.08.01
   */
  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!email) return;
      try {
        const orders: ClientSaleDTO[] = await orderFetch(email);
        const transformedOrders = orders.map((order) => {
          const orderDate = new Date(order.saleDate);
          const orderDateFormat = orderDate.toISOString().split("T")[0];
          return { ...order, saleDate: orderDateFormat };
        });
        setError(null);
        setOrderDetails(transformedOrders);
      } catch (error) {
        setError(getOrderListErrMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [email]);
  return { orderDetails, error, loading };
};

export default useOrderHook;
