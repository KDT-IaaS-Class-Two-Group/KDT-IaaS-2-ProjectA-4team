import { ProductDTO } from "@shared/DTO/products/product.dto";

/**
 * @moonhr 24.07.31
 * * 데이터 수정하기
 * @param product 수정된 제품 데이터
 */
export const updateProductUpdate = async (product: ProductDTO) => {
  const response = await fetch(
    `http://localhost:3001/product/update/${product._id}`,
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
