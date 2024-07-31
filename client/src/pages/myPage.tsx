import { Input } from "components/ui/input";
import React from "react";
import LinkButtonComponent from "src/components/linkButtonComponent";
import LoginInfoComponent from "src/components/LoginInfo";
import MyPageFormComponent from "src/components/myPageFormComponent";

const MyPage: React.FC = () => {
  return (
    <div
      id="root"
      className="w-screen h-screen flex flex-col justify-center items-center"
    >
      <LoginInfoComponent email="rockCoders" />
      <div className="h-90% w-80% flex flex-col justify-center items-center">
        <div id="content-header" className="w-full h-10% flex">
          <LinkButtonComponent href="/UserPage">
            &larr; 돌아가기
          </LinkButtonComponent>
        </div>
        <MyPageFormComponent />
        <div id="order-details" className="h-50% w-full">
          <div id="order-details__header" className="">
            <h1 className="font-bold text-lg">주문내역</h1>
          </div>
          <div
            id="order-details__content"
            className="flex flex-col h-full overflow-y-scroll"
          >
            <div className="order-details__items flex justify-around items-center mt-4">
              <p>아이템</p>
              <p>아이템 내용</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
