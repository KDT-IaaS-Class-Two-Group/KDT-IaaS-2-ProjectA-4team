import { useRouter } from "next/router";
import { useState } from "react";
import getUserRoleFetch from "src/model/user/role/getUserRoleFetch";
import routeUrlGenerator from "src/modules/generator/routeUrlGenerator";
import {
  failedGetUserRoleMessage,
  incorrectUserRoleErrMessage,
} from "static/hooks/redirect/useRedirect.static";

const useRedirect = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const EP_ADMIN = process.env.NEXT_PUBLIC_EP_ADMIN as string;
  const EP_STOCK_INFO = process.env.NEXT_PUBLIC_EP_STOCK_INFO as string;
  const EP_U_PAGE = process.env.NEXT_PUBLIC_EP_U_PAGE as string;

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
