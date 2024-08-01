import React, { useRef } from "react";
import SignUpForm, { SignUpFormRef } from "../../components/sign_up/Form";
import ValiChecker from "src/modules/validation/ValiChecker";

const SignUpPage: React.FC = () => {
  const formRef = useRef<SignUpFormRef>(null);

  const handleClick = () => {
    const ValiArray = [false, false, false, false];
    if (formRef.current) {
      const inputRefs = formRef.current.getInputRefs();

      let pwForCheck = "";

      inputRefs.forEach((inputRef) => {
        if (inputRef?.id == "user-name") {
          if (ValiChecker.checkName(inputRef.value)) {
            ValiArray[0] = true;
          }
          console.log(`이름 유효성: ${ValiChecker.checkName(inputRef.value)}`);
        } else if (inputRef?.id == "sign-up-email") {
          if (ValiChecker.checkEmail(inputRef.value)) {
            ValiArray[1] = true;
          }
          console.log(
            `이메일 유효성: ${ValiChecker.checkEmail(inputRef.value)}`,
          );
        } else if (inputRef?.id == "sign-up-pw") {
          if (ValiChecker.checkPW(inputRef.value).valid) {
            ValiArray[2] = true;
          }
          console.log(`비밀번호 유효성`, ValiChecker.checkPW(inputRef.value));
          pwForCheck = inputRef!.value;
        } else if (inputRef?.id == "sign-up-sec-pw") {
          if (ValiChecker.isEqualTo(inputRef.value, pwForCheck)) {
            ValiArray[3] = true;
          }
          console.log(
            `비밀번호 둘이 같은지: ${ValiChecker.isEqualTo(inputRef.value, pwForCheck)}`,
          );
          console.log(ValiArray);
        }
      });
    }
  };

  return (
    <div className="w-svw h-svh">
      <SignUpForm ref={formRef} />
      <button className="w-20 h-6 bg-slate-500" onClick={handleClick}>
        회원 가입
      </button>
    </div>
  );
};

export default SignUpPage;
