import { useState } from "react";
import { updateProductUpdate } from "src/model/productFetchUpdate";
import { ProductDTO } from "@shared/DTO/products/product.dto";

interface productUpdateHook {
  updateProduct: (product: ProductDTO) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const ProductUpdateHook = (): productUpdateHook => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateProduct = async (product: ProductDTO) => {
    setLoading(true);
    setError(null);

    try {
      await updateProductUpdate(product);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message); // 'err'이 Error 인스턴스인 경우에만 'message'를 사용
      } else {
        setError("An unknown error occurred"); // Error가 아닌 경우 처리
      }
    } finally {
      setLoading(false);
    }
  };

  return { updateProduct, loading, error };
};

export default ProductUpdateHook;
