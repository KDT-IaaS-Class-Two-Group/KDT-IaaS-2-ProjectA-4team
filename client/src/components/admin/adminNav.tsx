import React from "react";
import LoginInfoComponent from "../LoginInfo";
import NavListBox from "./navListBox";

/**
 * @crystal23733 24.07.26
 * @returns admin페이지 aside
 */
const AdminNav: React.FC = () => {
  return (
    <div id="aside" className="fixed top-0 left-0 h-screen p-10 shadow-xl w-72">
      <div className="w-80% h-10%">
        <LoginInfoComponent email="rockCoders" />
      </div>
      <NavListBox />
    </div>
  );
};

export default AdminNav;
