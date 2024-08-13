import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@components/ui/button";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import routeUrlGenerator from "src/modules/generator/routeUrlGenerator";
import { Input } from "@components/ui/input";

interface LoginFormProps {
  className?: string;
}

/**
 * @moonhr 24.07.25
 * * 로그인 폼
 * @param to fetch
 * @param onSuccessRedirect 이동할 페이지
 * @returns 로그인 폼
 */
export const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
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
      const LOG = process.env.NEXT_PUBLIC_LOG as string;
      const LOG_LOGIN = process.env.NEXT_PUBLIC_LOG_LOGIN as string;

      try {
        const response = await fetcher(serverUrlGenerator(EP_LOGIN), "post", {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();

        // roleId에 따라 라우팅
        if (data.roleID === 0) {
          router.push(routeUrlGenerator(EP_U_PAGE));
        } else if (data.roleID === 1) {
          router.push(routeUrlGenerator(EP_ADMIN, EP_STOCK_INFO));
        }
        try {
          await fetcher(serverUrlGenerator(LOG, LOG_LOGIN), "post", {
            credentials: "include",
          });
        } catch (error) {
          error;
        }
      } catch (error) {
        throw error;
      }
    }
  };

  // 스타일
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={className}>
      <form className="flex flex-col items-start justify-start w-full gap-4 ">
        <Input
          type="text"
          className="w-full bg-gray-200 opacity-50 p-7 hover:bg-amber-400/70 rounded-xl"
          placeholder="email"
          autoComplete="user-email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          className="w-full bg-gray-200 opacity-50 p-7 hover:bg-amber-400/70 rounded-xl"
          placeholder="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="outline"
          type="submit"
          size="default"
          className="w-full p-3 text-lg text-white rounded-xl bg-amber-400 hover:font-semibold"
          onClick={handleAction}
        >
          Login
        </Button>
      </form>
    </div>
  );
};
