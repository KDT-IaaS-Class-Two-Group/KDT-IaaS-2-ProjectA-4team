import React from "react";
import LinkButtonComponent from "src/components/linkButtonComponent";
import LoginInfoComponent from "src/components/LoginInfo";
import MyPageFormComponent from "src/components/myPageFormComponent";
import OrderDetails from "src/components/orderDetails";
import useOrderHook from "src/hooks/orderHook";

/**
 * @crystal23733 24.08.01
 * @returns {JSXElement}
 */
const MyPage: React.FC = () => {
  const memberName = "유호영";
  const { orderDetails, error } = useOrderHook(memberName);

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
        <OrderDetails orderDetails={orderDetails} error={error} />
      </div>
    </div>
  );
};

export default MyPage;
