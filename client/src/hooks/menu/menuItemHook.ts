import { useEffect, useState } from "react";
import productFetchMenu from "src/model/product/menu/productFetchMenu";
import { failedLoadingDataMessage } from "static/hooks/menu/menuItemHook.static";
import IProduct from "../../../../db/products/product.interface";

/**
 * @yuxincxoi 24.08.05
 * * 데이터베이스에서 가져온 제품 목록 상태 관리
 * @returns productList product 데이터베이스 제품 목록
 */
export const MenuItemHook = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);

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
