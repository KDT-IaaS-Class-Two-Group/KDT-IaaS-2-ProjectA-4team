import React from "react";
import LoginInfoComponent from "../LoginInfo";

const AdminNav: React.FC = () => {
  return (
    <div id="aside">
      <LoginInfoComponent email="rockCoders" />
    </div>
  );
};

export default AdminNav;
