import React from "react";
import AdminNav from "src/components/nav/admin/adminNav";

/**
 * @crystal23733
 * @date 24.08.23
 *
 * `Admin` 컴포넌트는 관리 페이지의 기본 레이아웃을 렌더링합니다.
 *
 * 이 컴포넌트는 `AdminNav` 컴포넌트를 포함하여 관리 페이지의 네비게이션 바를 표시합니다.
 *
 * @component
 *
 * @returns {JSX.Element} - 관리 페이지의 기본 레이아웃을 렌더링하는 JSX 요소를 반환합니다.
 */
const Admin: React.FC = () => {
  return (
    <div>
      <AdminNav />
    </div>
  );
};

export default Admin;
