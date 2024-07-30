import { SaleDTO } from "../../../shared/DTO/sale/sale.dto";

/**
 * @crystal23733 24.07.30
 * @return data 매출관련 데이터
 */
export default async (): Promise<SaleDTO[]> => {
  const response = await fetch("http://localhost:3001/sales");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  console.log(data); // 데이터를 확인합니다.
  return data;
};
