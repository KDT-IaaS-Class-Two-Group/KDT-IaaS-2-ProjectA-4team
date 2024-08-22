import { useState, useEffect } from "react";
import { ProductDTO } from "../../../../shared/DTO/products/product.dto";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import {
  deleteDataErrMessage,
  DataErrMessage,
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

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetcher(serverUrlGenerator(EP_PRODUCTS_DATE), "get", { credentials: "include", 
      });
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
  }, []);

  const deleteProduct = async (_id: string) => {
    try {
      await fetcher(serverUrlGenerator(EP_PRODUCTS_DATE, _id), "delete", {
        credentials: "include",
      });
      fetchData();
    } catch (err) {
      setError(`${deleteDataErrMessage}`);
    }
  };
  
  const addProduct = async (product: ProductDTO) => {
    const postUrl = serverUrlGenerator(EP_PRODUCTS_DATE, "orderproduct");
    try {
      await fetcher(postUrl, "post", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
        credentials: "include",
      });
      fetchData();
    } catch (error) {
      throw error
    }
  };
  return { data, loading, error, deleteProduct, addProduct };
};
