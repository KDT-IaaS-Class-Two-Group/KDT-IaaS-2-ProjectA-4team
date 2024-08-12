import { useState, useCallback, useEffect } from "react";
import { ProductDTO } from "../../../../shared/DTO/products/product.dto";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import {
  deleteDataErrMessage,
  getDataErrMessage,
} from "static/hooks/expiration/ExpirationDateHook.static";

/**
 * @jojayeon 24.08.05
 * @returns {{
 *  data : ProductDTO[] 제품정보 ,
 *  loading : boolean 로딩 ,
 *  error : string | null 에러 ,
 *  deleteProduct: (id: string) => void 제품 정보 삭제
 * }}
 */

export const ExpirationDateHook = () => {
  const EP_PRODUCTS_DATE = process.env.NEXT_PUBLIC_EP_PRODUCTS_DATE as string;

  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetcher(
        serverUrlGenerator(EP_PRODUCTS_DATE),
        "get",
        { credentials: "include" },
      );
      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
      const result = await response.json();
      setData(result); // 데이터 업데이트
    } catch (err) {
      setError(getDataErrMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(); // 컴포넌트 마운트 시 데이터 가져오기
  }, [fetchData]);

  const deleteProduct = async (_id: string) => {
    try {
      await fetcher(serverUrlGenerator(EP_PRODUCTS_DATE, _id), "delete", {
        credentials: "include",
      });
      await fetchData();
    } catch (err) {
      setError(deleteDataErrMessage);
    }
  };

  const addProduct = async (product: ProductDTO) => {
    try {
      await fetcher(
        serverUrlGenerator(EP_PRODUCTS_DATE, "orderproduct"),
        "post",
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
          credentials: "include",
        },
      );
      await fetchData(); // 제품 추가 후 데이터 갱신
    } catch (err) {
      setError("데이터를 추가하는 데 실패했습니다.");
    }
  };

  return {
    data,
    loading,
    error,
    deleteProduct,
    addProduct,
    refetch: fetchData, // 데이터 갱신 함수 반환
  };
};
