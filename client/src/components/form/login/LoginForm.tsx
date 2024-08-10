import React, { useState } from "react";
import { useRouter } from "next/router";
import InputComponent from "../../input/Input";
import CustomButton from "../../button/customized/CustomButton";
import { jwtDecode, JwtPayload } from "jwt-decode";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import routeUrlGenerator from "src/modules/generator/routeUrlGenerator";

/**
 * @moonhr 24.07.25
 * * 로그인 폼
 * @param to fetch
 * @param onSuccessRedirect 이동할 페이지
 * @returns 로그인 폼
 */
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleAction = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.type === "submit") {
      event.preventDefault();

      const EP_LOGIN = process.env.NEXT_PUBLIC_EP_LOGIN as string;
      const EP_ADMIN = process.env.NEXT_PUBLIC_EP_ADMIN as string;
      const EP_STOCK_INFO = process.env.NEXT_PUBLIC_EP_STOCK_INFO as string;
      const EP_U_PAGE = process.env.NEXT_PUBLIC_EP_U_PAGE as string;

      try {
        const response = await fetcher(serverUrlGenerator(EP_LOGIN), "post", {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        });

        const data = await response.json();

        // roleId에 따라 라우팅
        if (data.roleID === 0) {
          router.push(routeUrlGenerator(EP_U_PAGE));
        } else if (data.roleID === 1) {
          router.push(routeUrlGenerator(EP_ADMIN, EP_STOCK_INFO));
        }
      } catch (error) {
        throw error;
      }
    }
  };

  return (
    <form className="flex flex-col items-center justify-center w-full gap-4 ">
      <InputComponent
        type="text"
        className="w-full bg-white opacity-50 hover:bg-red-400/70"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputComponent
        type="password"
        className="w-full bg-white opacity-50 hover:bg-red-400/70"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <CustomButton
        variant="outline"
        type="submit"
        size="default"
        className="text-lg text-white rounded-3xl w-28 bg-rose-400"
        onClick={handleAction}
      >
        Login
      </CustomButton>
    </form>
  );
};
