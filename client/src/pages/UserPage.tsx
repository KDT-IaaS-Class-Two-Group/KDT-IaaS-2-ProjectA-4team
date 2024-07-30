import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import CardComponent from "src/components/Card";
import UserNav from "src/components/users/UserNav";
import LinkButtonComponent from "src/components/linkButtonComponent";

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
  const menuItems = () => {
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
            <CardComponent title="토마토 소스" content={2000} />
            <CardComponent title="바베큐 소스" content={2500} />
            <CardComponent title="마요네즈 소스" content={1800} />
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
        {menuItems()}
      </div>
      <UserNav />
    </div>
  );
};

export default UserPage;
