// src/hooks/orderHook.ts
import { useEffect, useState } from "react";
import orderFetch from "src/model/order/orderFetch";
import TOrder from "src/types/order/Order.type";

/**
 * @crystal23733 24.08.01
 * @param {string} name
 * @returns
 * - orderDetails : 주문 데이터
 * - error : 에러 메세지
 */
const useOrderHook = (name: string) => {
  const [orderDetails, setOrderDetails] = useState<TOrder[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const orders: TOrder[] = await orderFetch(name);
        const transformedOrders = orders.map((order) => {
          const orderDate = new Date(order.saleDate);
          const orderDateFormat = orderDate.toISOString().split("T")[0];
          return { ...order, saleDate: orderDateFormat };
        });
        setError(null);
        setOrderDetails(transformedOrders);
      } catch (error) {
        setError("주문내역을 가지고오는 중 에러가 발생하였습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [name]);
  return { orderDetails, error, loading };
};

export default useOrderHook;
