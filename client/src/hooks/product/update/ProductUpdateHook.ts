import { useState } from "react";
import { updateProductUpdate } from "src/model/product/update/productFetchUpdate";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import { unknownErrMessage } from "static/error/unknown/unknownErr.static";
import productUpdateHook from "src/interfaces/hooks/product/update/ProductUpdateHook.interface";

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
        setError(unknownErrMessage);
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateProduct, loading, error };
};

export default ProductUpdateHook;
