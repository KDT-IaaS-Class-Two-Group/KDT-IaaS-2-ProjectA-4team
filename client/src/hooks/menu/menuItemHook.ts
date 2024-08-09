import { useEffect, useState } from "react";
import productFetchMenu from "src/model/product/menu/productFetchMenu";
import Product from "src/interfaces/product/Product.interface";
import { failedLoadingDataMessage } from "static/error/hooks/menu/menuItemHook.static";

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
