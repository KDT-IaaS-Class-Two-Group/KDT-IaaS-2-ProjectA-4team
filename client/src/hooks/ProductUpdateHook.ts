import { useState } from "react";
import { updateProductUpdate } from "src/model/productFetchUpdate";
import { ProductDTO } from "@shared/DTO/products/product.dto";

interface productUpdateHook {
  updateProduct: (product: ProductDTO) => Promise<ProductDTO>;
  loading: boolean;
  error: string | null;
}

const ProductUpdateHook = (): productUpdateHook => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateProduct = async (product: ProductDTO): Promise<ProductDTO> => {
    setLoading(true);
    setError(null);

    try {
      const updatedProduct = await updateProductUpdate(product);
      return updatedProduct;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateProduct, loading, error };
};

export default ProductUpdateHook;
