import { useState } from "react";
import changePasswordFetch from "src/model/changePasswordFetch";

const useChangePasswordHook = () => {
  const [password, setPassword] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [changePasswordConfirm, setChangePasswordConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (changePassword !== changePasswordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const result = await changePasswordFetch(password, changePassword);
      console.log(result);
    } catch (error) {
      console.log("변경 실패");
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("비밀번호 변경에 실패하였습니다.");
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
    handleSubmit,
  };
};

export default useChangePasswordHook;
