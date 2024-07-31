import { useState, useEffect, useCallback } from "react";
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
      // 더미 데이터 생성
      const dummyData: ProductDTO[] = [
        new ProductDTO({
          productID: 1,
          productCategory: "빵",
          productName: "식빵",
          unitPrice: 2000,
          quantity: 10,
          restockDate: new Date(), // 예시 날짜
          expirationDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1),
          ), // 1년 후
        }),
        new ProductDTO({
          productID: 2,
          productCategory: "패티",
          productName: "버거 패티",
          unitPrice: 1500,
          quantity: 25,
          restockDate: new Date(), // 예시 날짜
          expirationDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 0.5),
          ), // 6개월 후
        }),
        new ProductDTO({
          productID: 3,
          productCategory: "음료",
          productName: "콜라",
          unitPrice: 1000,
          quantity: 50,
          restockDate: new Date(), // 예시 날짜
          expirationDate: new Date(
            new Date().setFullYear(new Date().getFullYear() + 0.2),
          ), // 2개월 후
        }),
      ];

      // 비동기 호출처럼 지연
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 지연
      setData(dummyData);
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
