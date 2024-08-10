import { useState } from "react";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import { saveProductData } from "src/model/product/table/productFetchTableData";
import { unknownErrMessage } from "static/error/unknown/unknownErr.static";
import UseOrderProductHook from "src/interfaces/product/order/modal/ProductOrderModalHook.interface";

/**
 * @moonhr 24.08.02
 * * `ProductOrderModalHook` 훅은 제품 주문 모달의 상태를 관리하고 제품 데이터를 서버에 저장하는 기능을 제공합니다.
 *
 * @returns {{
 *   orderProductData: (product: ProductDTO) => Promise<ProductDTO>;  // 제품 데이터를 서버에 저장하는 함수
 *   loading: boolean;                                                // 데이터 저장 중 로딩 상태
 *   error: string | null;                                           // 오류 메시지 상태
 * }}
 */
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
        setError(unknownErrMessage);
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { orderProductData, loading, error };
};

export default ProductOrderModalHook;
