import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import UserNav from "src/components/users/UserNav";
import LinkButtonComponent from "src/components/linkButtonComponent";
import MenuItems from "src/components/users/MenuItems";

/**
 * @yuxincxoi 24.07.25
 * * 물건을 구입할 수 있는 사용자 페이지
 * @returns { JSXElement }
 */

const UserPage: FC = () => {
  const router = useRouter();
  const [selectCategory, setSelectCategory] = useState("bread");

  useEffect(() => {
    const category = router.query.category as string;
    if (category) {
      setSelectCategory(category);
    }
  }, [router.query.category]);

  return (
    <div>
      <div>
        <LinkButtonComponent
          href="#"
          onClick={() => setSelectCategory("bread")}
        >
          빵
        </LinkButtonComponent>
        <LinkButtonComponent
          href="#"
          onClick={() => setSelectCategory("patty")}
        >
          패티
        </LinkButtonComponent>
        <LinkButtonComponent
          href="#"
          onClick={() => setSelectCategory("source")}
        >
          소스
        </LinkButtonComponent>
        <LinkButtonComponent href="#" onClick={() => setSelectCategory("side")}>
          사이드
        </LinkButtonComponent>
        <LinkButtonComponent
          href="#"
          onClick={() => setSelectCategory("drink")}
        >
          음료
        </LinkButtonComponent>
      </div>
      <div className="absolute flex m-10 justify-between w-[1100px]">
        <MenuItems selectCategory={selectCategory} />
      </div>
      <UserNav />
    </div>
  );
};

export default UserPage;
