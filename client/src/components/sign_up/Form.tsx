import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputComponent from "src/components/Input";
import SignUpInputs from "../../../static/sign-up/SignUpInputs";

const passwordSchema = z
  .string()
  .min(8, { message: "비밀번호는 최소 8자, 16 이상이어야 합니다." })
  .regex(/[a-z]/, { message: "비밀번호는 소문자를 포함해야 합니다." })
  .regex(/[0-9]/, { message: "비밀번호는 숫자를 포함해야 합니다." })
  .regex(
    /^(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-])(?!.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-].*[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]).*$/,
    {
      message: "비밀번호는 정확히 하나의 특수 문자를 포함해야 합니다.",
    }
  );

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log(e);
};

const SignUpForm: React.FC = () => {
  useState;

  return (
    <form id="sign-up-form" method="post" onSubmit={handleSubmit}>
      <div>
        {SignUpInputs.map((itemArray, key) => (
          <InputComponent
            id={itemArray[1]}
            name={itemArray[1]}
            key={key}
            placeholder={itemArray[0]}
            type={itemArray[0]}
          />
        ))}
      </div>
      <button type="submit">ㅎㅇ</button>
    </form>
  );
};

export default SignUpForm;
