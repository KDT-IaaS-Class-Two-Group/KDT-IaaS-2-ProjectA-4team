import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import { ProductDTO } from "@shared/DTO/products/product.dto";

/**
 * 제품 추가를 처리하는 훅
 * @param {Function} fetchData - 데이터를 다시 가져오는 함수
 * @param {string} epProductsDate - 제품 날짜를 위한 엔드포인트
 * @returns {Function} 제품 추가 함수
 */
export const useAddProduct = (fetchData: () => void, epProductsDate: string) => {
  const addProduct = async (product: ProductDTO) => {
    const postUrl = serverUrlGenerator(epProductsDate, "orderproduct");
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
      throw error;
    }
  };

  return { addProduct };
};
