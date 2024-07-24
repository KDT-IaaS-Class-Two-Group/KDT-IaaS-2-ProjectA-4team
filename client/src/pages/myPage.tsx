import React from "react";
import UserHeaderComponent from "src/components/users/userHeaderComponent";

const MyPage:React.FC = () => {
  return (
    <div id="root" className="w-screen h-screen flex flex-col justify-center items-center">
      <UserHeaderComponent />
      <div className="h-90% w-80% flex flex-col justify-center items-center">
        <div id="content-header" className="w-full h-15% flex">
          <a href="/userPage" className="text-xl">&larr; 돌아가기</a>
        </div>
        <div id="password-change-box" className="h-30% w-full">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id="order-details" className="h-50% w-full"></div>
      </div>
    </div>
  );
}

export default MyPage;