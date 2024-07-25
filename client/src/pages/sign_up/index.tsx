import React, { useState } from "react";
import MyForm from "../../components/sign_up/Form";

const SignUp: React.FC = () => {
  // CHECKPOINT: 회원가입 페이지 제작
  return (
    <div className="w-svw h-svh">
      <MyForm />
      {/* FIXME: 오류 없는 shadcn 컴포넌트를 이용해야함 */}
      <button className="w-20 h-6 bg-slate-500">회원 가입</button>
    </div>
  );
};

export default SignUp;
