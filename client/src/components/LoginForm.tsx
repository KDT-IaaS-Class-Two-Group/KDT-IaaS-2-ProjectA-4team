import React, { useState } from "react";
import { useRouter } from "next/router";
import InputComponent from "./Input";
import CustomButton from "./CustomButton";

interface LoginFormProps {
  to: string;
  onSuccessRedirect: string;
}

/**
 * @moonhr 24.07.25
 * * 로그인 폼
 * @param to fetch
 * @param onSuccessRedirect 이동할 페이지
 * @returns 로그인 폼
 */
export const LoginForm: React.FC<LoginFormProps> = ({
  to,
  onSuccessRedirect,
}) => {
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
        const response = await fetch(to, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const result = await response.json();
        console.log("서버 응답:", result);

        // 서버 응답이 성공적이면 지정된 경로로 라우터 이동
        router.push(onSuccessRedirect);
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
