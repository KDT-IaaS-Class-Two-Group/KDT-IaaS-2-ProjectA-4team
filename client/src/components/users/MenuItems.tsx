import React from "react";
import CardComponent from "src/components/Card";
import { MenuItemHook } from "src/hooks/menuItemHook";

interface MenuItemsProps {
  selectCategory: string;
  onAddToCart: (title: string, price: number) => void;
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
    switch (selectCategory) {
      case "bread":
        return (
          <>
            <CardComponent
              title="화이트"
              content={4000}
              onAddToCart={onAddToCart}
            />
            <CardComponent
              title="허니오트"
              content={4000}
              onAddToCart={onAddToCart}
            />
            <CardComponent
              title="플랫 브레드"
              content={4000}
              onAddToCart={onAddToCart}
            />
          </>
        );
      case "patty":
        return (
          <>
            <CardComponent
              title="게살 패티"
              content={5000}
              onAddToCart={onAddToCart}
            />
            <CardComponent
              title="징징이다리 패티"
              content={5000}
              onAddToCart={onAddToCart}
            />
            <CardComponent
              title="집게사장 손 패티"
              content={5000}
              onAddToCart={onAddToCart}
            />
          </>
        );
      case "source":
        return (
          <>
            <CardComponent
              title="랜치 소스"
              content={2000}
              onAddToCart={onAddToCart}
            />
            <CardComponent
              title="칠리 소스"
              content={2500}
              onAddToCart={onAddToCart}
            />
            <CardComponent
              title="스위트어니언 소스"
              content={1800}
              onAddToCart={onAddToCart}
            />
          </>
        );
      case "side":
        return (
          <>
            <CardComponent
              title="감자튀김"
              content={1500}
              onAddToCart={onAddToCart}
            />
            <CardComponent
              title="치킨 너겟"
              content={2000}
              onAddToCart={onAddToCart}
            />
            <CardComponent
              title="어니언 링"
              content={1800}
              onAddToCart={onAddToCart}
            />
          </>
        );
      case "drink":
        return (
          <>
            <CardComponent
              title="콜라"
              content={1200}
              onAddToCart={onAddToCart}
            />
            <CardComponent
              title="사이다"
              content={1200}
              onAddToCart={onAddToCart}
            />
            <CardComponent
              title="주스"
              content={1500}
              onAddToCart={onAddToCart}
            />
          </>
        );
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
