import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import { ClientSaleDTO } from "@shared/DTO/sale/clientSale.interface";

/**
 * @crystal23733 24.08.01
 * @param {string}
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
