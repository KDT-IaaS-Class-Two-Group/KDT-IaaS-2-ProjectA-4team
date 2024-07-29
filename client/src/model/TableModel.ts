import { ProductDTO } from "../../../shared/DTO/products/product.dto";
import { dummyProductData } from "./dummi";

/**
 * @moonhr 24.07.28
 * @param endpoint api받아올 엔드포인트
 * @returns json
 */
export const fetchTableData = async (endpoint: string): Promise<ProductDTO> => {
  // const response = await fetch(`$http://localhost:3001/${endpoint}`);
  // if (!response.ok) {
  //   throw new Error("Failed to fetch data");
  // }
  // return response.json();
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyProductData), 1000); // 1초 후 더미 데이터를 반환
  });
};
