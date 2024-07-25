import React from "react";
import { LoginForm } from "src/components/LoginForm";
import TitleComponent from "src/components/titleComponent";
import Logo from "src/components/logo";

const LoginPage = () => {
  return (
    <div className="flex items-start justify-center w-full">
      <div className="flex flex-col items-start justify-start w-96">
        <Logo imageUrl="" />
        <TitleComponent titletext="Login" />
        <LoginForm to="" onSuccessRedirect="" />
      </div>
    </div>
  );
};

export default LoginPage;
