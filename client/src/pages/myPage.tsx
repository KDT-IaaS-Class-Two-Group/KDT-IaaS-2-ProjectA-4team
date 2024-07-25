import { Input } from "components/ui/input";
import { useRouter } from "next/router";
import React from "react";
import CustomButton from "src/components/CustomButton";
import UserHeaderComponent from "src/components/users/userHeaderComponent";

const MyPage:React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/UserPage");
  }


  return (
    <div id="root" className="w-screen h-screen flex flex-col justify-center items-center">
      <UserHeaderComponent />
      <div className="h-90% w-80% flex flex-col justify-center items-center">
        <div id="content-header" className="w-full h-10% flex">
          <CustomButton className="" onClick={handleClick}>&larr; 돌아가기</CustomButton>
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
            <div className="order-details__items flex justify-around items-center mt-4">
              <p>아이템</p>
              <p>아이템 내용</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;