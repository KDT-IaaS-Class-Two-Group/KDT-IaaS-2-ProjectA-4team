import React, { useState } from "react";
import { LoginForm } from "src/components/form/login/LoginForm";
import TitleComponent from "src/components/title/titleComponent";
import Logo from "src/components/logo/logo";
import LinkButtonComponent from "src/components/button/link/linkButtonComponent";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-7/10 h-7/10"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-6xl italic font-bold">Welcome To</h1>
        <h1 className="m-2 italic font-extrabold text-8xl">CRAPCRAP</h1>
        <h1 className="text-6xl italic font-bold">Burger</h1>
        <div className="relative flex flex-col items-center justify-center overflow-hidden w-80% h-96">
          <div
            id="main"
            className={`absolute flex flex-col items-center transition-transform duration-700 ${
              isVisible ? "-translate-x-44" : "translate-x-0"
            }`}
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
          <div
            id="login"
            className={`absolute transition-transform duration-700 w-300px flex flex-col justify-start items-start ${
              isVisible
                ? "translate-x-44 opacity-100 pointer-events-auto"
                : "translate-x-0 opacity-0 pointer-events-none"
            }`}
          >
            <h1 className="relative mb-3 text-3xl italic font-bold">Login</h1>
            <LoginForm className="relative w-full mb-4" />
            <div className="flex">
              <p className="inline">아직 회원이 아니신가요?</p>
              <LinkButtonComponent
                href="/sign_up"
                className="inline font-semibold hover:font-bold"
              >
                회원가입
              </LinkButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
