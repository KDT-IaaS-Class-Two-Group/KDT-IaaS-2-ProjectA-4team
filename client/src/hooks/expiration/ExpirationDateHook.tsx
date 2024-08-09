import { useState, useEffect } from "react";
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
  const EP_PRODUCTS = process.env.NEXT_PUBLIC_EP_PRODUCTS as string;

  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const EP_PRODUCTS_DATE = process.env.NEXT_PUBLIC_EP_PRODUCTS_DATE as string;

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetcher(serverUrlGenerator(EP_PRODUCTS_DATE));
      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(`${getDataErrMessage}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (_id: string) => {
    try {
      await fetcher(serverUrlGenerator(EP_PRODUCTS_DATE, _id), "delete");
      fetchData();
    } catch (err) {
      setError(`${deleteDataErrMessage}`);
    }
  };
  const addProduct = async (product: ProductDTO) => {
    const postUrl = serverUrlGenerator(EP_PRODUCTS, "orderproduct");
    try {
      const response = await fetch(postUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error("POST 요청 오류");
      }
      console.log("오나유!");
      await fetchData(); // 제품 추가 후 데이터 갱신
    } catch (err) {
      setError("데이터를 추가하는 데 실패했습니다.");
    }
  };
  return { data, loading, error, deleteProduct, addProduct };
};
