import React from "react";
import LinkButtonComponent from "src/components/linkButtonComponent";

interface UserMenuProps {
  selectCategory: string;
  setSelectCategory: (category: string) => void;
}

/**
 * @yuxincxoi 24.07.30
 * * 사용자페이지의 제품 카테고리를 나타내는 메뉴 컴포넌트
 * @param {function(string):void} props.setSelectCategory 선택된 제품 카테고리를 설정하는 함수
 * @returns {JSXElement}
 */

const categoryEn = ["bread", "patty", "source", "side", "drink"];
const categoryKo = ["빵", "패티", "소스", "사이드", "음료"];

const UserMenu: React.FC<UserMenuProps> = ({
  selectCategory,
  setSelectCategory,
}) => {
  return (
    <div className="flex w-[75%] m-5 justify-center">
      <>
        {categoryEn.map((category, index) => (
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
            {categoryKo[index]}
          </LinkButtonComponent>
        ))}
      </>
    </div>
  );
};

export default UserMenu;
