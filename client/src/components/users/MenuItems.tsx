import React from "react";
import CardComponent from "src/components/Card";

interface MenuItemsProps {
  selectCategory: string;
}

/**
 * @yuxincxoi 24.07.30
 * * 사용자페이지의 선택된 카테고리에 따라 조건부 렌더링 시킬 제품 리스트 컴포넌트
 * @param {string} selectCategory 선택된 제품 카테고리
 * @returns {JSXElement}
 */

const MenuItems: React.FC<MenuItemsProps> = ({ selectCategory }) => {
  const renderMenuItems = () => {
    switch (selectCategory) {
      case "bread":
        return (
          <>
            <CardComponent title="화이트" content={4000} />
            <CardComponent title="허니오트" content={4000} />
            <CardComponent title="플랫 브레드" content={4000} />
          </>
        );
      case "patty":
        return (
          <>
            <CardComponent title="게살 패티" content={5000} />
            <CardComponent title="징징이다리 패티" content={5000} />
            <CardComponent title="집게사장 손 패티" content={5000} />
          </>
        );
      case "source":
        return (
          <>
            <CardComponent title="랜치 소스" content={2000} />
            <CardComponent title="칠리 소스" content={2500} />
            <CardComponent title="스위트어니언 소스" content={1800} />
          </>
        );
      case "side":
        return (
          <>
            <CardComponent title="감자튀김" content={1500} />
            <CardComponent title="치킨 너겟" content={2000} />
            <CardComponent title="어니언 링" content={1800} />
          </>
        );
      case "drink":
        return (
          <>
            <CardComponent title="콜라" content={1200} />
            <CardComponent title="사이다" content={1200} />
            <CardComponent title="주스" content={1500} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute flex m-10 justify-between w-[1100px]">
      {renderMenuItems()}
    </div>
  );
};

export default MenuItems;
