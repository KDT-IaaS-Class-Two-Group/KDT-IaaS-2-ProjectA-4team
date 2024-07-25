import React from "react";
import { LoginForm } from "src/components/LoginForm";
import TitleComponent from "src/components/titleComponent";
import Logo from "src/components/logo";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center h-96 w-96">
        <Logo className="w-40 mb-3" />
        <TitleComponent titletext="Login" />
        <LoginForm to="" onSuccessRedirect="" />
      </div>
    </div>
  );
};

export default LoginPage;
