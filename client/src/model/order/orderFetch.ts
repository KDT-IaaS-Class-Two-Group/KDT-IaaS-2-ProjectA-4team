import TOrders from "src/types/order/Order.type";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";

/**
 * @crystal23733 24.08.01
 * @param {string} name 유저 더미데이터
 */
export default async (name: string): Promise<TOrders[]> => {
  const EP_SALES = process.env.NEXT_PUBLIC_EP_SALES as string;
  const EP_ORDERS = process.env.NEXT_PUBLIC_EP_ORDERS as string;

  try {
    const response = await fetcher(
      serverUrlGenerator(EP_SALES, EP_ORDERS, name),
      "get",
      {
        credentials: "include",
      },
    );
    
    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData.message || "주문내역 조회 실패");
    }
    return await response.json();
  } catch (error) {
    console.error("주문내역 조회 중 클라이언트 오류", error);
    throw error;
  }
};
