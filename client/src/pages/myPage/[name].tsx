import { useRouter } from "next/router";
import React from "react";
import LoginInfoComponent from "src/components/info/login/LoginInfo";
import MyPageFormComponent from "src/components/form/my_page/myPageFormComponent";
import OrderDetails from "src/components/order/orderDetails";
import useOrderHook from "src/hooks/order/orderHook";
import useRedirect from "src/hooks/redirect/useRedirect";

/**
 * @crystal23733 24.08.01
 * @returns {JSXElement}
 */
const MyPage: React.FC = () => {
  const router = useRouter();
  const name = typeof router.query.name === "string" ? router.query.name : "";
  console.log("query", name);

  // 훅 호출은 조건문 밖에서 수행
  const { orderDetails, error, loading } = useOrderHook(name);

  const { redirect, error: redirectError } = useRedirect();

  if (typeof name !== "string") {
    return <p>Invalid name</p>; // 오류 처리
  }

  return (
    <div
      id="root"
      className="flex flex-col items-center justify-center w-screen h-screen"
    >
      <LoginInfoComponent />
      <div className="h-90% w-80% flex flex-col justify-center items-center">
        <div id="content-header" className="w-full h-10% flex">
          <button onClick={redirect}>&larr; 돌아가기</button>
        </div>
        {redirectError && <p className="mt-2 text-red-500">{redirectError}</p>}
        <MyPageFormComponent />
        {loading ? (
          <p>...로딩중</p>
        ) : (
          <OrderDetails orderDetails={orderDetails} error={error} />
        )}
      </div>
    </div>
  );
};

export default MyPage;
