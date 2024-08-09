import { ProductDTO } from "@shared/DTO/products/product.dto";
import url3001Generator from "src/modules/generator/url3001Generator";

/**
 * @moonhr 24.07.31
 * * 데이터 수정하기
 * @param product 수정된 제품 데이터
 */
fetch(url3001Generator());
export const updateProductUpdate = async (product: ProductDTO) => {
  const EP_PRODUCT = process.env.NEXT_PUBLIC_EP_PRODUCT as string;
  const EP_UPDATE = process.env.NEXT_PUBLIC_EP_UPDATE as string;

  const response = await fetch(
    url3001Generator(EP_PRODUCT, EP_UPDATE, product._id),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
      credentials: "include",
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to update product: ${response.statusText}`);
  }
  const updatedProduct = await response.json();
  return new ProductDTO(updatedProduct);
};
