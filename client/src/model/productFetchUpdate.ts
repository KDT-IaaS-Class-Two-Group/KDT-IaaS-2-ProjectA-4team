import { ProductDTO } from "@shared/DTO/products/product.dto";

export const updateProductUpdate = async (product: ProductDTO) => {
  const response = await fetch(`http://localhost:3001/${product.productID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product.toJSON()),
  });

  if (!response.ok) {
    throw new Error(`Failed to update product: ${response.statusText}`);
  }
};
