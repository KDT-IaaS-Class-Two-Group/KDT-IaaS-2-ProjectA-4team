import { useEffect, useState } from "react";
import productFetchMenu from "src/model/productFetchMenu";

interface Product {
  id: string;
  name: string;
  category: string;
  unitPrice: number;
  quantity: number;
  restockDate: Date;
  expirationDate: Date;
}

export const MenuItemHook = () => {
  const [productList, setProductList] = useState<Product[]>([]);

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