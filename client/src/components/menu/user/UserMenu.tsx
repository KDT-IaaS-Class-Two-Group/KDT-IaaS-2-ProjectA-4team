import React from "react";
import LinkButtonComponent from "src/components/button/link/linkButtonComponent";
import UserMenuProps from "src/interfaces/components/menu/user/UserMenu.interface";
import { categories } from "static/components/menu/user/UserMenu.static";

/**
 * @yuxincxoi 24.07.30
 * * 사용자페이지의 제품 카테고리를 나타내는 메뉴 컴포넌트
 * @param {function(string):void} props.setSelectCategory 선택된 제품 카테고리를 설정하는 함수
 * @returns {JSXElement}
 */

const UserMenu: React.FC<UserMenuProps> = ({
  selectCategory,
  setSelectCategory,
}) => {
  return (
    <div className="flex w-[75%] m-5 justify-center">
      <>
        {categories.categoryEn.map((category, index) => (
          <LinkButtonComponent
            key={category}
            href="#"
            onClick={() => setSelectCategory(category)}
            className={
              selectCategory === category
                ? "text-lg underline underline-offset-0 decoration-8 decoration-yellow-300 ease-out duration-300 font-semibold"
                : "text-lg underline underline-offset-0 decoration-8 decoration-white hover:font-bold"
            }
          >
            {categories.categoryKo[index]}
          </LinkButtonComponent>
        ))}
      </>
    </div>
  );
};

export default UserMenu;
