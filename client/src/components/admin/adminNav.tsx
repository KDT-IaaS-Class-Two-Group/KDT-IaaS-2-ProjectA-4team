import React from "react";
import LoginInfoComponent from "../LoginInfo";

const AdminNav: React.FC = () => {
  return (
    <div id="aside" className="w-30% h-10%">
      <LoginInfoComponent email="rockCoders" />
    </div>
  );
};

export default AdminNav;
