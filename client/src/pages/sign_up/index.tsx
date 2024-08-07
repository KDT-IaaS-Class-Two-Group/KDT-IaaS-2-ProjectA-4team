import React, { useRef, useState } from "react";
import SignUpForm, { SignUpFormRef } from "../../components/sign_up/Form";
import ValiChecker from "src/modules/validation/ValiChecker";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";

const SignUpPage: React.FC = () => {
  const formRef = useRef<SignUpFormRef>(null);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const EP_SIGN_UP = process.env.NEXT_PUBLIC_EP_SIGN_UP as string;

  const handleClick = async () => {
    if (formRef.current) {
      const inputRefs = formRef.current.getInputRefs();
      const errors = formRef.current.validateFields();

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
    <div className="w-svw h-svh">
      <SignUpForm ref={formRef} />
      <button className="w-20 h-6 bg-slate-500" onClick={handleClick}>
        회원 가입
      </button>
      {responseMessage && <p className="text-red-500">{responseMessage}</p>}
    </div>
  );
};

export default SignUpPage;
