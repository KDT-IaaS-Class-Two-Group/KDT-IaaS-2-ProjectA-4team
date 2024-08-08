import { useState } from "react";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import { saveProductData } from "src/model/product/table/productFetchTableData";

interface UseOrderProductHook {
  orderProductData: (product: ProductDTO) => Promise<ProductDTO>;
  loading: boolean;
  error: string | null;
}

const ProductOrderModalHook = (): UseOrderProductHook => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const orderProductData = async (product: ProductDTO): Promise<ProductDTO> => {
    setLoading(true);
    setError(null);

    try {
      const savedProduct = await saveProductData(product);
      return savedProduct;
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

  return { orderProductData, loading, error };
};

export default ProductOrderModalHook;
