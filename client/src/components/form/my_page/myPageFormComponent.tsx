import { Input } from "components/ui/input";
import React from "react";
import useChangePasswordHook from "src/hooks/password/changePasswordHook";

/**
 * `MyPageFormComponent`
 *
 * 이 컴포넌트는 사용자가 마이페이지에서 비밀번호를 변경할 수 있도록 하는 폼을 제공합니다.
 * 기존 비밀번호와 새 비밀번호, 그리고 비밀번호 확인 입력란이 포함되어 있습니다.
 * 비밀번호 변경을 위한 모든 로직은 `useChangePasswordHook` 커스텀 훅을 통해 관리됩니다.
 *
 * @component
 * @example
 * return (
 *   <MyPageFormComponent />
 * )
 *
 * @returns {JSX.Element} 비밀번호 변경을 위한 폼을 렌더링하는 JSX 엘리먼트
 *
 * @description
 * 이 컴포넌트는 다음과 같은 필드로 구성됩니다:
 * - 기존 비밀번호 입력
 * - 새 비밀번호 입력
 * - 새 비밀번호 확인 입력
 * - 변경하기 버튼
 *
 * 사용자는 각 필드에 입력한 후, "변경하기" 버튼을 눌러 비밀번호를 변경할 수 있습니다.
 * 비밀번호 변경 시 성공 또는 실패 메시지가 화면에 표시됩니다.
 *
 * @hook
 * `useChangePasswordHook` - 비밀번호 변경과 관련된 상태 및 로직을 관리하는 커스텀 훅입니다.
 *
 * 이 훅은 다음과 같은 상태와 함수들을 반환합니다:
 * - `password` (string): 사용자가 입력한 기존 비밀번호
 * - `setPassword` (function): 기존 비밀번호 상태를 업데이트하는 함수
 * - `changePassword` (string): 사용자가 입력한 새 비밀번호
 * - `setChangePassword` (function): 새 비밀번호 상태를 업데이트하는 함수
 * - `changePasswordConfirm` (string): 새 비밀번호 확인 필드에 입력된 값
 * - `setChangePasswordConfirm` (function): 새 비밀번호 확인 필드 상태를 업데이트하는 함수
 * - `error` (string | null): 비밀번호 변경 중 발생한 오류 메시지
 * - `successMessage` (string | null): 비밀번호 변경 성공 시 표시되는 메시지
 * - `handleSubmit` (function): 폼 제출 시 호출되는 함수로, 비밀번호 변경 로직을 실행합니다.
 *
 * @crystal23733
 * @date 24.07.31
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
