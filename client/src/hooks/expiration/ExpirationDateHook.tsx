import { useState, useEffect } from "react";
import { ProductDTO } from "../../../../shared/DTO/products/product.dto";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import {
  getDataErrMessage,
  DataErrMessage,
} from "static/hooks/expiration/ExpirationDateHook.static";

/**
 * 제품 데이터를 가져오는 훅
 * @param {string} epProductsDate - 제품 날짜를 위한 엔드포인트
 * @returns {Object} 데이터, 로딩 상태, 에러 메시지, 데이터 가져오기 함수
 */
export const useFetchData = (epProductsDate: string) => {
  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetcher(
        serverUrlGenerator(epProductsDate),
        "get",
        { credentials: "include" },
      );
      if (!response.ok) {
        throw new Error(`${getDataErrMessage}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(`${DataErrMessage}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [epProductsDate]);

  return { data, loading, error, fetchData };
};
