import React, { FC } from "react";
import CardComponent from "src/components/Card";
import UserNav from "src/components/UserNav";

/**
 * @yuxincxoi 24.07.25
 * * 물건을 구입할 수 있는 사용자 페이지
 * @returns { JSXElement }
 */

const UserPage: FC = () => {
  return (
    <div>
      <div className="absolute flex m-10 justify-between w-[1100px]">
        <CardComponent title="게살 패티" content={4000} />
        <CardComponent title="징징이다리 패티" content={4000} />
        <CardComponent title="치킨 패티" content={4000} />
      </div>
      <UserNav />
    </div>
  );
};

export default UserPage;
