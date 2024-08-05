import React from "react";
import CardComponent from "src/components/Card";
import { MenuItemHook } from "src/hooks/menuItemHook";

interface MenuItemsProps {
  selectCategory: string;
  onAddToCart: (title: string, price: number) => void;
}

interface Product {
  id: string;
  name: string;
  category: string;
  unitPrice: number;
  quantity: number;
  restockDate: string;
  expirationDate: string;
}

/**
 * @yuxincxoi 24.07.30
 * * 사용자페이지의 선택된 카테고리에 따라 조건부 렌더링 시킬 제품 리스트 컴포넌트
 * @param {string} selectCategory 선택된 제품 카테고리
 * @param {function} onAddToCart 선택된 제품을 장바구니에 추가
 * @returns {JSXElement}
 */

const MenuItems: React.FC<MenuItemsProps> = ({
  selectCategory,
  onAddToCart,
}) => {
  const { productList } = MenuItemHook();

  const renderMenuItems = () => {
    const productBread: Product[] = [];
    const productPatty: Product[] = [];
    const productSource: Product[] = [];
    const productSide: Product[] = [];
    const productDrink: Product[] = [];

    productList.forEach((product) => {
      if (product.category === "bread") {
        productBread.push(product);
      } else if (product.category === "patty") {
        productPatty.push(product);
      } else if (product.category === "source") {
        productSource.push(product);
      } else if (product.category === "side") {
        productSide.push(product);
      } else if (product.category === "drink") {
        productDrink.push(product);
      }
    });

    // 카테고리에 따라 제품을 렌더링합니다.
    const renderCategory = (products: Product[]) => (
      <>
        {products.map((product) => (
          <CardComponent
            key={product.id}
            title={product.name}
            content={product.unitPrice}
            onAddToCart={() => onAddToCart(product.name, product.unitPrice)}
          />
        ))}
      </>
    );

    switch (selectCategory) {
      case "bread":
        return renderCategory(productBread);
      case "patty":
        return renderCategory(productPatty);
      case "source":
        return renderCategory(productSource);
      case "side":
        return renderCategory(productSide);
      case "drink":
        return renderCategory(productDrink);
      default:
        return null;
    }
  };

  return (
    <div className="mx-10 w-[73%] grid gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 2xl:bg-black">
      {renderMenuItems()}
    </div>
  );
};

export default MenuItems;
