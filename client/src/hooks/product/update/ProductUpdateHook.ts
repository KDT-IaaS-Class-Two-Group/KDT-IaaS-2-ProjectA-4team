import { useState } from "react";
import { updateProductUpdate } from "src/model/product/update/productFetchUpdate";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import { unknownErrMessage } from "static/error/unknown/unknownErr.static";
import productUpdateHook from "src/interfaces/hooks/product/update/ProductUpdateHook.interface";

/**
 * @moonhr 24.08.02
 * * `ProductUpdateHook` 훅은 제품 정보를 업데이트하는 로직과 상태 관리를 제공합니다.
 *
 * @returns {{
 *   updateProduct: (product: ProductDTO) => Promise<ProductDTO>;  // 제품 정보를 업데이트하는 함수
 *   loading: boolean;                                             // 데이터 업데이트 중 로딩 상태
 *   error: string | null;                                        // 오류 메시지 상태
 * }}
 */
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
