import React, { useState } from "react";
import { useRouter } from "next/router";
import InputComponent from "./Input";
import CustomButton from "./CustomButton";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface RoldJwtPayload extends JwtPayload {
  roleID?: number;
}

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
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      try {
        const response = await fetch(`http://localhost:3001/login`, {
          method: "POST",
          body: formData,
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const result = await response.json();
        const token = result.token;
        console.log("서버 응답:", result);

        const decodedToken = jwtDecode<RoldJwtPayload>(token);
        const roleId = decodedToken.roleID;

        // roleId에 따라 라우팅
        if (roleId === 0) {
          router.push("/UserPage");
        } else if (roleId === 1) {
          router.push("/stockInfo");
        }
      } catch (error) {
        console.error("서버로 데이터 전송 실패:", error);
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
