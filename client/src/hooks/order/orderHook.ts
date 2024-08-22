import { ClientSaleDTO } from "@shared/DTO/sale/clientSale.interface";
import { useEffect, useState } from "react";
import orderFetch from "src/model/order/orderFetch";
import { getOrderListErrMessage } from "static/hooks/order/orderHook.static";

/**
 * @crystal23733 24.08.01
 * @param {string} name
 * @returns
 * - orderDetails : 주문 데이터
 * - error : 에러 메세지
 */
const useOrderHook = (email: string) => {
  const [orderDetails, setOrderDetails] = useState<ClientSaleDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
