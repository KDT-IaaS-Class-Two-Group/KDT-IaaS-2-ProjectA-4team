import React from "react";
import LoginInfoComponent from "../../info/login/LoginInfo";
import NavListBox from "../list/navListBox";

/**
 * @crystal23733 24.07.26
 * @returns admin페이지 aside
 */
const AdminNav: React.FC = () => {
  return (
    <div id="aside" className="w-72 h-screen">
      <div className="w-full h-10%">
        <LoginInfoComponent email="rockCoders" />
      </div>
      <NavListBox />
    </div>
  );
};

export default AdminNav;
