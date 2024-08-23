import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import { ClientSaleDTO } from "@shared/DTO/sale/clientSale.interface";

/**
 * @crystal23733
 * @date 24.08.01
 *
 * 사용자 이메일을 기반으로 판매 데이터를 가져오는 함수입니다.
 *
 * @param {string} email - 사용자의 이메일 주소입니다. 이 값에 따라 판매 데이터가 필터링됩니다.
 *
 * @returns {Promise<ClientSaleDTO[]>} - 판매 데이터를 포함하는 `ClientSaleDTO` 객체의 배열을 반환합니다.
 *
 * @throws {Error} - 데이터 가져오기 또는 JSON 파싱 중 오류가 발생할 경우, 해당 오류를 던집니다.
 */
export default async (email: string): Promise<ClientSaleDTO[]> => {
  const EP_SALES = process.env.NEXT_PUBLIC_EP_SALES as string;
  const EP_ORDERS = process.env.NEXT_PUBLIC_EP_ORDERS as string;

  try {
    const response = await fetcher(
      serverUrlGenerator(EP_SALES, EP_ORDERS, email),
      "get",
      {
        credentials: "include",
      },
    );
    const responseData: ClientSaleDTO[] = await response.json();

    return responseData;
  } catch (error) {
    throw error;
  }
};
