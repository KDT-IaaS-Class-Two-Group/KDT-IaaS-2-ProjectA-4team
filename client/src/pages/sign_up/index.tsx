import React, { useRef, useState } from "react";
import SignUpForm from "../../components/sign_up/Form";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import { SignUpFormRef } from "src/interfaces/components/sign_up/Form.interface";
import Logo from "src/components/logo/logo";

const SignUpPage: React.FC = () => {
  const formRef = useRef<SignUpFormRef>(null);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const EP_SIGN_UP = process.env.NEXT_PUBLIC_EP_SIGN_UP as string;

  const handleClick = async () => {
    if (formRef.current) {
      const inputRefs = formRef.current.getInputRefs();
      const errors = formRef.current.validateFields();
      console.log(serverUrlGenerator(EP_SIGN_UP));
      if (Object.keys(errors).length === 0) {
        try {
          const response = await fetcher(
            serverUrlGenerator(EP_SIGN_UP),
            "post",
            {
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: inputRefs.find((ref) => ref?.id === "user-name")
                  ?.value,
                email: inputRefs.find((ref) => ref?.id === "sign-up-email")
                  ?.value,
                password: inputRefs.find((ref) => ref?.id === "sign-up-pw")
                  ?.value,
              }),
            },
          );
          await response.json();

          if (!response.ok) {
            throw new Error("서버 오류 발생");
          }

          window.location.href = process.env.NEXT_PUBLIC_MAIN_URL as string;

          setResponseMessage(`회원 가입 성공`);
        } catch (error) {
          setResponseMessage("회원 가입 중 오류가 발생했습니다.");
        }
      } else {
        setResponseMessage("입력한 정보가 유효하지 않습니다.");
      }
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-6xl italic font-bold">Welcome To</h1>
        <h1 className="m-2 italic font-extrabold text-8xl">CRAPCRAP</h1>
        <h1 className="text-6xl italic font-bold">Burger</h1>
        <div className="relative flex flex-col items-center justify-center overflow-hidden w-80% h-96">
          <div
            id="main"
            className={`absolute flex flex-col items-center transition-transform duration-700 -translate-x-44`}
          >
            <Logo
              className="relative w-auto"
              width={300}
              height={100}
              alt="logo"
              priority={true}
            />
            <div
              id="clickButton"
              onClick={handleClick}
              className="relative p-3 text-xl text-center bg-gray-200 rounded-full w-50% font-bold italic mt-5 hover:bg-amber-400 cursor-pointer"
            >
              Click Me!
            </div>
          </div>
          <div className="h-auto translate-x-44 w-300px">
            <h1 className="relative mb-3 text-3xl italic font-bold">Sing Up</h1>
            <SignUpForm ref={formRef} />
            <button
              className="w-full p-2 text-lg text-white rounded-xl bg-amber-400 hover:font-semibold"
              onClick={handleClick}
            >
              회원 가입
            </button>
            {responseMessage && (
              <p className="text-xs font-thin text-red-500">
                {responseMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
