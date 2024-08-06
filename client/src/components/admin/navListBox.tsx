import React from "react";
import LinkButtonComponent from "../linkButtonComponent";
import FooterLinks from "../footerComponent";

/**
 * @crystal23733 24.07.29
 * @returns aside list
 */
const NavListBox: React.FC = () => {
  return (
    <nav className="flex flex-col h-90% p-4 gap-4">
      <div className="text-lg font-semibold">재고 관리</div>
      <ul className="pl-4 space-y-2">
        <li className="mb-4">
          <LinkButtonComponent href="/admin/stockInfo">
            재고 조회
          </LinkButtonComponent>
        </li>
        <li className="mb-4">
          <LinkButtonComponent href="/admin/stockDate">
            유통기한 관리
          </LinkButtonComponent>
        </li>
      </ul>
      <div className="text-lg font-semibold">매출 관리</div>
      <ul className="pl-4 space-y-2">
        <li className="mb-4">
          <LinkButtonComponent href="/admin/salesInquiry">
            매출 조회
          </LinkButtonComponent>
        </li>
        <li className="mb-4">
          <LinkButtonComponent href="/admin/salesRanking">
            매출 순위
          </LinkButtonComponent>
        </li>
      </ul>
      <div className="text-lg font-semibold">회원 관리</div>
      <ul className="pl-4 space-y-2">
        <li className="mb-4">
          <LinkButtonComponent href="/admin/memberInfo">
            회원 조회
          </LinkButtonComponent>
        </li>
      </ul>
      <FooterLinks />
    </nav>
  );
};

export default NavListBox;
