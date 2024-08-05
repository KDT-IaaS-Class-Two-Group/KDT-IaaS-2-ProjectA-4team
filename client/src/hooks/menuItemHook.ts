import { useEffect, useState } from "react";
import productFetchMenu from "src/model/productFetchMenu";

export const MenuItemHook = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const productData = await productFetchMenu();
        return setProductList(productData);
      } catch (error) {
        console.error("데이터 로드 실패");
      }
    };

    loadData();
  });
  return { productList };
};
