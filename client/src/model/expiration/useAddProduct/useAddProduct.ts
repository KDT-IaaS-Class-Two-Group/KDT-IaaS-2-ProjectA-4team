import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import { ProductDTO } from "@shared/DTO/products/product.dto";

/**
 * @jojayeon 24.08.22
 * 제품 추가를 처리하는 훅
 * @component
 * @param {Function} fetchData - 데이터를 post로 postUrl주소로 보내는 작업
 * @param {string} epProductsDate - 제품 날짜를 위한 엔드포인트
 * @returns {Function} addProduct - ProductDTO타입의 product데이터를 비동기로 서버에 보내는역할
 *
 */
export const useAddProduct = (
  fetchData: () => void,
  epProductsDate: string,
) => {
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
