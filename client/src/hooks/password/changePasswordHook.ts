import { useState } from "react";
import changePasswordFetch from "src/model/password/change/changePasswordFetch";
import ValiChecker from "src/modules/validation/ValiChecker";
import {
  failedChangePwMessage,
  isEqualPwErrMessage,
  succeedChangePwMessage,
} from "static/hooks/password/changePasswordHook.static";

const useChangePasswordHook = () => {
  const [password, setPassword] = useState<string>("");
  const [changePassword, setChangePassword] = useState<string>("");
  const [changePasswordConfirm, setChangePasswordConfirm] =
    useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 유효성 검사
    const passwordValidation = ValiChecker.checkPW(changePassword);
    if (!passwordValidation.valid) {
      setError(passwordValidation.message || null); // undefined를 null로 변환
      return;
    }

    if (!ValiChecker.isEqualTo(changePassword, changePasswordConfirm)) {
      setError(isEqualPwErrMessage);
      return;
    }

    try {
      const result = await changePasswordFetch(password, changePassword);
      console.log(result);
      setError(null);
      setSuccessMessage(succeedChangePwMessage);
      // 변경 성공 시 새로고침
      window.location.reload();
    } catch (error) {
      setSuccessMessage(null);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(failedChangePwMessage);
      }
    }
  };

  return {
    password,
    setPassword,
    changePassword,
    setChangePassword,
    changePasswordConfirm,
    setChangePasswordConfirm,
    error,
    setError,
    successMessage,
    handleSubmit,
  };
};

export default useChangePasswordHook;
