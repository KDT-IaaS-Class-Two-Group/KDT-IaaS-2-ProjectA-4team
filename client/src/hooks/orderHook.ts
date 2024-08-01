import { useEffect, useState } from "react";
import orderFetch from "src/model/orderFetch";

/**
 * @crystal23733 24.08.01
 * @param {string} name 더미데이터
 * @returns {object} 
 * - orderDetails : 주문 데이터
 * - error : 에러 메세지
 */
const useOrderHook = (name: string) => {
  const [orderDetails, setOrderDetails] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const orders = await orderFetch(name);
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
