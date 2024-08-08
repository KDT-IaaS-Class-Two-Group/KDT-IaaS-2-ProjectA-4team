import { ProductDTO } from "@shared/DTO/products/product.dto";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";

/**
 * @moonhr 24.07.31
 * * 데이터 수정하기
 * @param product 수정된 제품 데이터
 */
fetch(serverUrlGenerator());
export const updateProductUpdate = async (product: ProductDTO) => {
  const EP_PRODUCT = process.env.NEXT_PUBLIC_EP_PRODUCT as string;
  const EP_UPDATE = process.env.NEXT_PUBLIC_EP_UPDATE as string;

  const response = await fetch(
    serverUrlGenerator(EP_PRODUCT, EP_UPDATE, product._id),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to update product: ${response.statusText}`);
  }
  const updatedProduct = await response.json();
  return new ProductDTO(updatedProduct);
};
