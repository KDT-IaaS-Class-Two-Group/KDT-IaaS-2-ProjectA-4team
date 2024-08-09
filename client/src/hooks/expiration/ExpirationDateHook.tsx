import { useState, useEffect } from "react";
import { ProductDTO } from "../../../../shared/DTO/products/product.dto";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import {
  deleteDataErrMessage,
  getDataErrMessage,
} from "static/error/hooks/expiration/ExpirationDateHook.static";

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
  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const EP_PRODUCTS_DATE = process.env.NEXT_PUBLIC_EP_PRODUCTS_DATE as string;

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetcher(serverUrlGenerator(EP_PRODUCTS_DATE));
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

  return { data, loading, error, deleteProduct };
};
