import React from "react";
import LoginInfoComponent from "../../info/login/LoginInfo";
import NavListBox from "../list/navListBox";
import FooterLinks from "../../footer/footerComponent";

/**
 * `AdminNav`
 *
 * 이 컴포넌트는 관리자 페이지의 사이드바를 렌더링합니다. 사이드바는 고정 위치로 설정되어 페이지의 왼쪽에 배치됩니다.
 * 컴포넌트는 로그인 정보를 표시하는 `LoginInfoComponent`, 내비게이션 목록을 표시하는 `NavListBox`, 그리고
 * 하단에 링크를 제공하는 `FooterLinks`를 포함합니다.
 *
 * @component
 *
 * @returns {JSX.Element} - 관리자 페이지의 사이드바를 렌더링하는 JSX 요소를 반환합니다. 사이드바는 고정 위치에 있으며,
 * 페이지의 왼쪽에 상단부터 하단까지 뷰포트를 채웁니다.
 *
 * @description
 * 사이드바는 다음과 같은 요소들로 구성됩니다:
 * - `LoginInfoComponent`: 로그인 정보를 표시합니다. 상단에 여백이 있으며, 사이드바의 전체 너비를 사용합니다.
 * - `NavListBox`: 내비게이션 목록을 렌더링합니다.
 * - `FooterLinks`: 사이드바의 하단에 위치하며, 추가적인 링크들을 제공합니다.
 *
 * 컴포넌트는 Tailwind CSS 클래스를 사용하여 스타일을 적용하며, 고정된 위치와 그림자 효과를 가진 사이드바를 구현합니다.
 *
 * @crystal23733
 * @date 24.07.26
 */
const AdminNav: React.FC = () => {
  return (
    <div id="aside" className="fixed top-0 left-0 h-screen shadow-xl w-72">
      <LoginInfoComponent className="mt-6 mb-20 ml-6 w-72" />
      <NavListBox />
      <FooterLinks className="mx-6 mt-24 w-72" />
    </div>
  );
};

export default AdminNav;
