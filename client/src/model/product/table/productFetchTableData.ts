import { ProductDTO } from "../../../../../shared/DTO/products/product.dto";
import url3001Generator from "src/modules/generator/url3001Generator";

/**
 * @moonhr 24.07.28
 * @returns json 배열
 */
export const productFetchTableData = async (): Promise<ProductDTO[]> => {
  const EP_PRODUCT = process.env.NEXT_PUBLIC_EP_PRODUCT as string;

  const response = await fetch(url3001Generator(EP_PRODUCT));
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

/**
 * @moonhr 24.07.29
 * 데이터 저장하기
 * @param product 저장할 제품 데이터
 * @returns 저장된 제품 데이터
 */
export const saveProductData = async (
  product: ProductDTO,
): Promise<ProductDTO> => {
  const EP_PRODUCT = process.env.NEXT_PUBLIC_EP_PRODUCT as string;
  const EP_ORDER = process.env.NEXT_PUBLIC_EP_ORDER as string;
  const response = await fetch(url3001Generator(EP_PRODUCT, EP_ORDER), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("데이터저장 실패!");
  }
  const savedProduct = await response.json();
  return new ProductDTO(savedProduct);
};
