import React from "react";
import SignUpForm from "../../components/sign_up/Form";

const SignUp: React.FC = () => {
  return (
    <div className="w-svw h-svh">
      <SignUpForm />
      <button className="w-20 h-6 bg-slate-500">회원 가입</button>
    </div>
  );
};

export default SignUp;
