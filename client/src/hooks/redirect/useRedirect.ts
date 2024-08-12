import { useRouter } from "next/router";
import { useState } from "react";
import getUserRoleFetch from "src/model/user/role/getUserRoleFetch";
import routeUrlGenerator from "src/modules/generator/routeUrlGenerator";
import {
  failedGetUserRoleMessage,
  incorrectUserRoleErrMessage,
} from "static/hooks/redirect/useRedirect.static";

/**
 * @crystal23733 24.08.06
 * * `useRedirect` 훅은 사용자 역할에 따라 적절한 페이지로 리다이렉션합니다.
 *
 * @returns {{
 *   redirect: () => Promise<void>;    // 사용자 역할에 따라 페이지를 리다이렉션하는 함수
 *   error: string | null;             // 리다이렉션 과정에서 발생한 오류 메시지
 * }}
 */
const useRedirect = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const EP_ADMIN = process.env.NEXT_PUBLIC_EP_ADMIN as string;
  const EP_STOCK_INFO = process.env.NEXT_PUBLIC_EP_STOCK_INFO as string;
  const EP_U_PAGE = process.env.NEXT_PUBLIC_EP_U_PAGE as string;

  /**
   * @crystal23733 24.08.06
   * * 사용자 역할에 따라 적절한 페이지로 리다이렉션합니다.
   *
   * - 역할이 1이면 관리자 페이지로 리다이렉션
   * - 역할이 0이면 사용자 페이지로 리다이렉션
   * - 역할이 다른 값이면 오류 메시지를 설정
   *
   * @throws {Error} 페이지 리다이렉션 도중 발생한 오류를 처리합니다.
   */
  const redirect = async () => {
    try {
      const userRole = await getUserRoleFetch();

      if (userRole === 1) {
        await router.push(routeUrlGenerator(EP_ADMIN, EP_STOCK_INFO));
      } else if (userRole === 0) {
        await router.push(routeUrlGenerator(EP_U_PAGE));
      } else {
        setError(incorrectUserRoleErrMessage);
      }
    } catch (err) {
      setError(failedGetUserRoleMessage);
    }
  };

  return { redirect, error };
};

export default useRedirect;
