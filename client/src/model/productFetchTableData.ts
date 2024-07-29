import { ProductDTO } from "../../../shared/DTO/products/product.dto";

/**
 * @moonhr 24.07.28
 * @param endpoint api받아올 엔드포인트
 * @returns json
 */
export const productFetchTableData = async (
  endpoint: string
): Promise<ProductDTO> => {
  const response = await fetch(`$http://localhost:3001/${endpoint}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
