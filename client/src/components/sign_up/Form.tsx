import React, { forwardRef, useRef, useImperativeHandle } from "react";
import InputComponent from "src/components/input/Input";
import SignUpInputs from "../../../static/sign-up/SignUpInputs.static";

interface SignUpFormProps {}

export interface SignUpFormRef {
  getInputRefs: () => (HTMLInputElement | null)[];
}

const SignUpForm = forwardRef<SignUpFormRef, SignUpFormProps>((props, ref) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useImperativeHandle(ref, () => ({
    getInputRefs: () => inputRefs.current,
  }));

  return (
    <form id="sign-up-form" method="post">
      <div>
        {SignUpInputs.map((item, index) => {
          const { type, name, placeholder, label } = item;

          return (
            <React.Fragment key={index}>
              <p>{label}</p>
              <InputComponent
                ref={(el: HTMLInputElement | null) => {
                  inputRefs.current[index] = el;
                }}
                id={name}
                name={name}
                placeholder={placeholder}
                type={type}
              />
            </React.Fragment>
          );
        })}
      </div>
    </form>
  );
});

// displayName을 명시적으로 설정 (큰따옴표 사용)
SignUpForm.displayName = "SignUpForm";

export default SignUpForm;
