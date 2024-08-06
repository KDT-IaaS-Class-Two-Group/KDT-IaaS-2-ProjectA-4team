// src/hooks/orderHook.ts
import { useEffect, useState } from "react";
import orderFetch from "src/model/orderFetch";
import TOrder from "src/types/Order.type";

/**
 * @crystal23733 24.08.01
 * @param {string} name 더미데이터
 * @returns {object}
 * - orderDetails : 주문 데이터
 * - error : 에러 메세지
 */
const useOrderHook = (name: string) => {
  const [orderDetails, setOrderDetails] = useState<TOrder[]>([]); // `TOrder` 타입으로 설정
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const orders: TOrder[] = await orderFetch(name);

        // `TOrder` 타입의 데이터를 그대로 사용합니다
        setOrderDetails(orders);
      } catch (error) {
        setError("주문내역을 가지고오는 중 에러가 발생하였습니다.");
      }
    };

    fetchOrderDetails();
  }, [name]);

  return { orderDetails, error };
};

export default useOrderHook;
