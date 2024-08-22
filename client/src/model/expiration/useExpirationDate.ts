import { useFetchData } from "src/hooks/expiration/ExpirationDateHook";
import { useDeleteProduct } from "./useDeleteProduct/useDeleteProduct";
import { useAddProduct } from "./useAddProduct/useAddProduct"; 

/**
 * 유통기한 관리 훅
 * @returns {Object} 데이터, 로딩 상태, 에러 메시지, 제품 삭제 함수, 제품 추가 함수
 */
export const useExpirationDate = () => {
  const EP_PRODUCTS_DATE = process.env.NEXT_PUBLIC_EP_PRODUCTS_DATE as string;

  const { data, loading, error, fetchData } = useFetchData(EP_PRODUCTS_DATE);
  const { deleteProduct } = useDeleteProduct(fetchData, EP_PRODUCTS_DATE);
  const { addProduct } = useAddProduct(fetchData, EP_PRODUCTS_DATE);

  return { data, loading, error, deleteProduct, addProduct };
};
