import React from "react";
import LoginInfoComponent from "../../LoginInfo";
import NavListBox from "./navListBox";

/**
 * @crystal23733 24.07.26
 * @returns admin페이지 aside
 */
const AdminNav: React.FC = () => {
  return (
    // !!!!!! 최상위 div bg 빼야됨
    <div id="aside" className="w-72 h-screen">
      <div className="w-full h-10%">
        <LoginInfoComponent email="rockCoders" />
      </div>
      <NavListBox />
    </div>
  );
};

export default AdminNav;
