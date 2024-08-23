import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";

/**
 * @jojayeon 24.08.22
 * 제품 삭제를 처리하는 훅
 * @param {Function} fetchData - 데이터를 다시 가져오는 함수
 * @param {string} epProductsDate - 제품 날짜를 위한 엔드포인트
 * @returns {Function} deleteProduct - 비동기로 _id라는 데이터에 delete 방식으로 데이터를 서버에 보내는 작업 
 */
export const useDeleteProduct = (fetchData: () => void, epProductsDate: string) => {
  const deleteProduct = async (_id: string) => {
    try {
      await fetcher(serverUrlGenerator(epProductsDate, _id), "delete", {
        credentials: "include",
      });
      fetchData();
    } catch (error) {
      throw error;
    }
  };

  return { deleteProduct };
};
