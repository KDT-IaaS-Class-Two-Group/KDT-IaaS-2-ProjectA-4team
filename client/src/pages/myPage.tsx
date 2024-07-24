import { Input } from "components/ui/input";
import React from "react";
import UserHeaderComponent from "src/components/users/userHeaderComponent";

const MyPage:React.FC = () => {
  return (
    <div id="root" className="w-screen h-screen flex flex-col justify-center items-center">
      <UserHeaderComponent />
      <div className="h-90% w-80% flex flex-col justify-center items-center">
        <div id="content-header" className="w-full h-10% flex">
          <a href="/userPage" className="text-xl h-2">&larr; 돌아가기</a>
        </div>
        <form action="" id="password-change-box" className="h-30% w-full">
          <p>비밀번호 변경</p>
          <Input type="password" placeholder="변경할 비밀번호를 입력해주세요." name="password" className="text-xl" />
          <Input type="password" placeholder="비밀번호 확인" name="checkPassword" className="text-xl" />
          <Input type="submit" value="변경하기" />
        </form>
        <div id="order-details" className="h-50% w-full">
          <div id="order-details__header" className="">
            <h1 className="font-bold text-lg">장바구니</h1>
          </div>
          <div id="order-details__content" className="flex flex-col h-full overflow-y-scroll">
            <div className="order-details__items">
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;