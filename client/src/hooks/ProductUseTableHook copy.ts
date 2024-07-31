import { useState, useEffect, useCallback } from "react";
import { productFetchTableData } from "src/model/productFetchTableData";
import { ProductDTO } from "@shared/DTO/products/product.dto";

/**
 * @moonhr 24.07.30
 * @returns {Object}
 *  - data: ProductDTO 배열, 가져온 제품 데이터.
 *  - loading: boolean, 데이터가 현재 로드 중인지 여부.
 *  - error: string | null, 데이터 가져오기에 실패했을 경우 오류 메시지.
 *  - refetch: function, 데이터를 수동으로 다시 가져올 수 있는 함수.
 */
export const ProductUseTableHook = () => {
  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // loadData를 useCallback으로 메모이제이션
  const loadData = useCallback(async () => {
    try {
      const products = await productFetchTableData();
      setData(products);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  // 컴포넌트가 마운트될 때 loadData 함수를 호출하여 데이터 가져오기 시작
  useEffect(() => {
    loadData();
  }, [loadData]);

  return { data, loading, error, refetch: loadData };
};
