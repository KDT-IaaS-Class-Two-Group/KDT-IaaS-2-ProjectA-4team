import React from "react";
import LinkButtonComponent from "src/components/linkButtonComponent";

interface UserMenuProps {
  setSelectCategory: (category: string) => void;
}

/**
 * @yuxincxoi 24.07.30
 * 사용자페이지의 구매할 제품 카테고리를 나타내는 메뉴 컴포넌트
 * @returns {JSXElement}
 */

const UserMenu: React.FC<UserMenuProps> = ({ setSelectCategory }) => {
  return (
    <div className="flex">
      <LinkButtonComponent href="#" onClick={() => setSelectCategory("bread")}>
        빵
      </LinkButtonComponent>
      <LinkButtonComponent href="#" onClick={() => setSelectCategory("patty")}>
        패티
      </LinkButtonComponent>
      <LinkButtonComponent href="#" onClick={() => setSelectCategory("source")}>
        소스
      </LinkButtonComponent>
      <LinkButtonComponent href="#" onClick={() => setSelectCategory("side")}>
        사이드
      </LinkButtonComponent>
      <LinkButtonComponent href="#" onClick={() => setSelectCategory("drink")}>
        음료
      </LinkButtonComponent>
    </div>
  );
};

export default UserMenu;
