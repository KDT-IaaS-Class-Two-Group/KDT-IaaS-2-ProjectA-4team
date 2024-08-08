import { useState, useEffect } from "react";
import { ProductDTO } from "../../../shared/DTO/products/product.dto";
import urlJoin from "url-join";
import url3001Generator from "src/modules/generator/url3001Generator";

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

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url3001Generator(EP_PRODUCTS)); //endpoint - products
      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError("데이터를 가져오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (_id: string) => {
    const deleteUrl = urlJoin(url3001Generator(EP_PRODUCTS, _id));
    try {
      await fetch(deleteUrl, {
        //엔드 포인트 products/${productID}` - 받는 부분은 어떻게 설정하지 변경해야하나?
        method: "DELETE", // 이거 때문에 문제가 없는 것 처럼 이야기 하는데 맞는지 모르겠음
      });
      fetchData();
    } catch (err) {
      setError("데이터를 삭제하는 데 실패했습니다.");
    }
  };

  return { data, loading, error, deleteProduct };
};
