import fetcher from "src/modules/fetching/fetcher";
import { SaleDTO } from "../../../../../shared/DTO/sale/sale.dto";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";

/**
 * @crystal23733 24.07.30
 * @return data 매출관련 데이터
 */
export default async (): Promise<SaleDTO[]> => {
  const EP_SALES = process.env.NEXT_PUBLIC_EP_SALES as string;

  const response = await fetcher(serverUrlGenerator(EP_SALES), "get", {
    credentials: "include",
  });

  const data = await response.json();
  return data;
};
