import { useRouter } from "next/router";
import React from "react";
import LoginInfoComponent from "src/components/info/login/LoginInfo";
import MyPageFormComponent from "src/components/form/my_page/myPageFormComponent";
import OrderDetails from "src/components/order/orderDetails";
import useOrderHook from "src/hooks/order/orderHook";
import useRedirect from "src/hooks/redirect/useRedirect";

/**
 * @crystal23733
 * @date 24.08.23
 *
 * `MyPage` 컴포넌트는 사용자의 마이페이지를 렌더링합니다.
 *
 * 이 컴포넌트는 다음을 포함합니다:
 * - `LoginInfoComponent`: 로그인 사용자 정보를 표시합니다.
 * - `MyPageFormComponent`: 비밀번호 변경 폼을 렌더링합니다.
 * - `OrderDetails`: 사용자의 주문 내역을 표시합니다.
 *
 * `useOrderHook` 훅을 통해 주문 내역을 가져오고 로딩 상태와 오류를 관리합니다.
 * `useRedirect` 훅을 통해 페이지 리디렉션 기능을 제공합니다.
 *
 * @component
 *
 * @returns {JSX.Element} - 사용자의 마이페이지를 구성하는 JSX 요소를 반환합니다.
 */
const MyPage: React.FC = () => {
  const router = useRouter();
  const name = typeof router.query.name === "string" ? router.query.name : "";

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
      <div className="h-90% w-55% flex flex-col justify-center items-center gap-5">
        <div id="content-header" className="w-full h-10% flex">
          <button onClick={redirect}>&larr; 돌아가기</button>
        </div>
        <LoginInfoComponent />
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
