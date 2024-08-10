import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
} from "react";
import InputComponent from "src/components/input/Input";
import SignUpInputs from "../../../static/sign-up/SignUpInputs.static";
import ValidateName from "src/pipes/Vaildate/ValidateName";
import ValidateEmail from "src/pipes/Vaildate/ValidateEmail";
import ValidatePassword from "src/pipes/Vaildate/ValidatePassword";
import ValidatePasswordCheck from "src/pipes/Vaildate/ValidatePasswordCheck";
import ValidationResult from "src/types/Validate.type";
import {
  SignUpFormProps,
  SignUpFormRef,
} from "src/interfaces/components/sign_up/Form.interface";

/**
 * @eonduck2 24.08.02
 * * `SignUpForm` 컴포넌트는 사용자 등록 폼을 구현합니다.
 * * 각 입력 필드는 유효성 검사 기능을 지원하며, 부모 컴포넌트에 의해 참조될 수 있습니다.
 *
 * @component
 *
 * @param {SignUpFormProps} props - `SignUpForm`에 전달되는 속성입니다.
 * @param {React.RefObject<SignUpFormRef>} ref - 컴포넌트의 참조를 부모 컴포넌트에 전달합니다.
 *
 * @returns {JSX.Element} - 사용자 등록 폼을 포함하는 JSX 요소를 반환합니다.
 */

const SignUpForm = forwardRef<SignUpFormRef, SignUpFormProps>((props, ref) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useImperativeHandle(ref, () => ({
    getInputRefs: () => inputRefs.current,
    validateFields: () => validateFields(), // validateFields 함수를 노출
  }));

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    inputRefs.current.forEach((inputRef) => {
      if (inputRef) {
        let validationResult: ValidationResult = true; // 초기값 설정

        switch (inputRef.id) {
          case "user-name":
            validationResult = ValidateName(inputRef.value);
            break;
          case "sign-up-email":
            validationResult = ValidateEmail(inputRef.value);
            break;
          case "sign-up-pw":
            validationResult = ValidatePassword(inputRef.value);
            break;
          case "sign-up-sec-pw":
            const pwInput = inputRefs.current.find(
              (ref) => ref?.id === "sign-up-pw",
            );
            validationResult = ValidatePasswordCheck(
              inputRef.value,
              pwInput?.value || "",
            );
            break;
          default:
            break;
        }

        if (typeof validationResult === "object" && !validationResult.valid) {
          newErrors[inputRef.id] = validationResult.message;
        }
      }
    });

    setErrors(newErrors);
    return newErrors;
  };

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
              {errors[name] && <p className="text-red-500">{errors[name]}</p>}
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
