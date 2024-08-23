import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import { ClientSaleDTO } from "@shared/DTO/sale/clientSale.interface";

/**
 * @crystal23733 24.07.30
 * @return data 매출관련 데이터
 */
export default async (): Promise<ClientSaleDTO[]> => {
  const EP_SALES = process.env.NEXT_PUBLIC_EP_SALES as string;

  const response = await fetcher(serverUrlGenerator(EP_SALES), "get", {
    credentials: "include",
  });

  const data: ClientSaleDTO[] = await response.json();

  return data;
};
