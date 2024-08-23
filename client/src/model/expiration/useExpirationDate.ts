import { useFetchData } from "src/hooks/expiration/ExpirationDateHook";
import { useDeleteProduct } from "./useDeleteProduct/useDeleteProduct";
import { useAddProduct } from "./useAddProduct/useAddProduct"; 

/**
 * @jojayeon 24.08.22
 * 유통기한 관리 훅 제품 삭제 제품 추가 상태관리 
 * 
 * @returns {Object} 유통기한 관리 상태와 함수 리턴
 * @returns {Array} data - 제품 데이터 배열입니다.
 * @returns {boolean} loading - 데이터 로딩 상태를 구분하는 브리언
 * @returns {string | null} error - 데이터 로딩 중 발생한 에러 메시지입니다.
 * @returns {Function} deleteProduct - 제품을 삭제하는 함수입니다.
 * @returns {Function} addProduct - 새로운 제품을 추가하는 함수입니다.
 */
export const useExpirationDate = () => {
  const EP_PRODUCTS_DATE = process.env.NEXT_PUBLIC_EP_PRODUCTS_DATE as string;

  const { data, loading, error, fetchData } = useFetchData(EP_PRODUCTS_DATE);
  const { deleteProduct } = useDeleteProduct(fetchData, EP_PRODUCTS_DATE);
  const { addProduct } = useAddProduct(fetchData, EP_PRODUCTS_DATE);

  return { data, loading, error, deleteProduct, addProduct };
};
