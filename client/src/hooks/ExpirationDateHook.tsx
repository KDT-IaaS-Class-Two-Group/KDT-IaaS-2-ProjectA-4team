import { useState, useEffect } from "react";
import { ProductDTO } from "../../../shared/DTO/products/product.dto";
import urlJoin from "url-join";

const productsApiUrl = process.env.NEXT_PUBLIC_PRODUCTS as string;

export const ExpirationDateHook = () => {
  const [data, setData] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    // 데이터 가져온 것 훅으로 실행 시킬 코드역할과 업데이트할때 다시 실행될 코드
    setLoading(true);
    try {
      const response = await fetch(productsApiUrl); //endpoint - products
      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
      const result = await response.json();
      setData(result); // 가져온 데이터
    } catch (err) {
      setError("데이터를 가져오는 데 실패했습니다."); // 에러
    } finally {
      setLoading(false); //로딩 메시지 제거
    }
  };

  useEffect(() => {
    //마운트 될 때 사용된다.
    fetchData();
  }, []);

  const deleteProduct = async (_id: string) => {
    const deleteUrl = urlJoin(productsApiUrl, _id);
    try {
      await fetch(deleteUrl, {
        //엔드 포인트 products/${productID}` - 받는 부분은 어떻게 설정하지 변경해야하나?
        method: "DELETE", // 이거 때문에 문제가 없는 것 처럼 이야기 하는데 맞는지 모르겠음
      });
      fetchData(); // 삭제 후 데이터 갱신 훅
    } catch (err) {
      setError("데이터를 삭제하는 데 실패했습니다.");
    }
  };

  return { data, loading, error, deleteProduct };
};
