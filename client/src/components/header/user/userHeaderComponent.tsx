import React from "react";

/**
 * @crystal23733 24.08.07
 * *`UserHeaderComponent`는 사용자 정보를 표시하는 헤더 컴포넌트입니다.
 *
 * @component
 *
 * @returns {JSX.Element} - 사용자 정보를 포함하는 헤더 JSX 요소를 반환합니다.
 */
const UserHeaderComponent: React.FC = () => {
  return (
    <header className="w-full h-10% flex items-center">
      <div className="w-15% h-80% ml-10">
        <p className="text-4xl">유호영</p>
      </div>
    </header>
  );
};

export default UserHeaderComponent;
