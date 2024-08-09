import TOrders from "src/types/order/Order.type";
import url3001Generator from "src/modules/generator/url3001Generator";

/**
 * @crystal23733 24.08.01
 * @param {string} name 유저 더미데이터
 */
export default async (name: string): Promise<TOrders[]> => {
  const EP_SALES = process.env.NEXT_PUBLIC_EP_SALES as string;
  const EP_ORDERS = process.env.NEXT_PUBLIC_EP_ORDERS as string;

  try {
    const response = await fetch(url3001Generator(EP_SALES, EP_ORDERS, name), {
      method: "GET",
      credentials: "include",
    });
    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      throw new Error(responseData.message || "주문내역 조회 실패");
    }
    return responseData;
  } catch (error) {
    console.error("주문내역 조회 중 클라이언트 오류", error);
    throw error;
  }
};
