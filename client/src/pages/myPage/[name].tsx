import { useRouter } from "next/router";
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
  const router = useRouter();
  const { name } = router.query; // URL 파라미터에서 사용자 이름 읽기

  if (typeof name !== 'string') {
    return <p>Invalid name</p>; // 오류 처리
  }

  const { orderDetails, error } = useOrderHook(name);

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
