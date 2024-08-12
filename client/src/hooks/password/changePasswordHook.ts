import { useState } from "react";
import changePasswordFetch from "src/model/password/change/changePasswordFetch";
import ValiChecker from "src/modules/validation/ValiChecker";
import {
  failedChangePwMessage,
  isEqualPwErrMessage,
  succeedChangePwMessage,
} from "static/hooks/password/changePasswordHook.static";

/**
 * @crystal23733 24.08.02
 * `useChangePasswordHook` 훅은 비밀번호 변경 폼의 상태를 관리하고 비밀번호 변경 요청을 처리합니다.
 *
 * @returns {{
 *   password: string;                      // 현재 비밀번호 상태
 *   setPassword: React.Dispatch<React.SetStateAction<string>>; // 현재 비밀번호 상태를 설정하는 함수
 *   changePassword: string;                // 새 비밀번호 상태
 *   setChangePassword: React.Dispatch<React.SetStateAction<string>>; // 새 비밀번호 상태를 설정하는 함수
 *   changePasswordConfirm: string;        // 새 비밀번호 확인 상태
 *   setChangePasswordConfirm: React.Dispatch<React.SetStateAction<string>>; // 새 비밀번호 확인 상태를 설정하는 함수
 *   error: string | null;                 // 오류 메시지 상태
 *   setError: React.Dispatch<React.SetStateAction<string | null>>; // 오류 메시지를 설정하는 함수
 *   successMessage: string | null;        // 성공 메시지 상태
 *   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>; // 폼 제출 처리 함수
 * }}
 *
 * @throws {string} - 비밀번호 변경 중 오류가 발생하면 에러 메시지를 문자열로 던집니다.
 *
 */
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
