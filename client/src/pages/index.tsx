import React from "react";
import { LoginForm } from "src/components/LoginForm";
import TitleComponent from "src/components/titleComponent";
import Logo from "src/components/logo";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-7/10 h-7/10">
          <Image
            src="/background.png"
            alt="Background"
            layout="responsive"
            width={700}
            height={700}
            style={{
              objectFit: "cover",
              opacity: 0.4,
            }}
            quality={100}
          />
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center mb-20 h-96 w-96">
          <Logo className="w-64" />
          <TitleComponent titletext="Login" />
          <LoginForm to="" onSuccessRedirect="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
