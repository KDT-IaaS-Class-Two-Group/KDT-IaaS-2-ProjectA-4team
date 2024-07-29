import React from "react";
import LoginInfoComponent from "../LoginInfo";
import NavListBox from "./navListBox";

const AdminNav: React.FC = () => {
  return (
    <div id="aside" className="w-15vw h-screen">
      <div className="w-full h-10%">
        <LoginInfoComponent email="rockCoders" />
      </div>
      <NavListBox />
    </div>
  );
};

export default AdminNav;
