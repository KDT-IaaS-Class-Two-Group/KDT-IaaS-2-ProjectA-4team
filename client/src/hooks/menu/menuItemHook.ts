import { useEffect, useState } from "react";
import productFetchMenu from "src/model/product/menu/productFetchMenu";
import Product from "src/interfaces/product/Product.interface";
import { failedLoadingDataMessage } from "static/hooks/menu/menuItemHook.static";

/**
 * @yuxincxoi 24.08.05
 * * `MenuItemHook` 훅은 메뉴 항목 목록을 가져와서 상태를 관리합니다.
 *
 * @returns {{
 *   productList: Product[]  // 로드된 제품 목록 (Product 인터페이스를 따름)
 * }}
 *
 * @throws {string} - 데이터 로딩 중 오류가 발생하면 에러 메시지를 문자열로 던집니다.
 *
 * @example
 * const { productList } = MenuItemHook();
 * console.log(productList); // 로드된 제품 목록을 출력
 */
export const MenuItemHook = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const productData = await productFetchMenu();
        return setProductList(productData);
      } catch (error) {
        throw `${failedLoadingDataMessage}: ${error}`;
      }
    };

    loadData();
  }, []);
  return { productList };
};
