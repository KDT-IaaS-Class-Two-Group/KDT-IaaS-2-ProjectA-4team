import { Input } from "components/ui/input";
import React from "react";
import useChangePasswordHook from "src/hooks/password/changePasswordHook";

/**
 * @crystal23733 24.07.31
 * @returns {JSXElement} 마이페이지 비밀번호 변경 컴포넌트
 */
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
      className="h-30% w-full mb-10"
      onSubmit={handleSubmit}
    >
      <p className="mb-2">비밀번호 변경</p>
      <div className="flex flex-col gap-4">
        <Input
          type="password"
          value={password}
          placeholder="기존 비밀번호를 입력해주세요."
          name="password"
          className="text-sm placeholder-gray-400 placeholder-opacity-40"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          value={changePassword}
          placeholder="변경할 비밀번호를 입력해주세요."
          name="changePassword"
          className="text-sm placeholder-gray-400 placeholder-opacity-40"
          onChange={(e) => setChangePassword(e.target.value)}
        />
        <Input
          type="password"
          value={changePasswordConfirm}
          placeholder="비밀번호 확인"
          name="changePasswordConfirm "
          className="text-sm placeholder-gray-400 placeholder-opacity-40"
          onChange={(e) => setChangePasswordConfirm(e.target.value)}
        />
        <Input type="submit" value="변경하기" />
      </div>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default MyPageFormComponent;
