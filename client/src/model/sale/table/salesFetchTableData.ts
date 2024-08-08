import { SaleDTO } from "../../../../../shared/DTO/sale/sale.dto";
import url3001Generator from "src/modules/generator/url3001Generator";

/**
 * @crystal23733 24.07.30
 * @return data 매출관련 데이터
 */
export default async (): Promise<SaleDTO[]> => {
  const EP_SALES = process.env.NEXT_PUBLIC_EP_SALES as string;

  const response = await fetch(url3001Generator(EP_SALES));
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};
