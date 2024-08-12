import React from "react";
import LoginInfoComponent from "../../info/login/LoginInfo";
import NavListBox from "../list/navListBox";
import FooterLinks from "../../footer/footerComponent";

/**
 * @crystal23733 24.07.26
 * @returns admin페이지 aside
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
