import { Input } from "components/ui/input";
import React from "react";
import useChangePasswordHook from "src/hooks/changePasswordHook";

const MyPageFormComponent: React.FC = () => {
  const {
    password,
    setPassword,
    changePassword,
    setChangePassword,
    changePasswordConfirm,
    setChangePasswordConfirm,
    error,
    successMessage,
    handleSubmit,
  } = useChangePasswordHook();
  return (
    <form
      action=""
      id="password-change-box"
      className="h-30% w-full"
      onSubmit={handleSubmit}
    >
      <p>비밀번호 변경</p>
      <Input
        type="password"
        value={password}
        placeholder="기존 비밀번호를 입력해주세요."
        name="password"
        className="text-xl"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        value={changePassword}
        placeholder="변경할 비밀번호를 입력해주세요."
        name="changePassword"
        className="text-xl"
        onChange={(e) => setChangePassword(e.target.value)}
      />
      <Input
        type="password"
        value={changePasswordConfirm}
        placeholder="비밀번호 확인"
        name="changePasswordConfirm"
        className="text-xl"
        onChange={(e) => setChangePasswordConfirm(e.target.value)}
      />
      <Input type="submit" value="변경하기" />
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default MyPageFormComponent;
