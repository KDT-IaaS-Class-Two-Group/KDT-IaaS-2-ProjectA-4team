import React from "react";
import LoginInfoComponent from "./LoginInfo";
import Cart from "./Cart";
import FooterLinks from "./footerComponent";

const UserNav = () => {
  return (
    <div className="w-72 float-right shadow-md h-screen">
      <LoginInfoComponent
        className="w-72 ml-6 mt-6 mb-20"
        email="rockcoders@kdt.com"
      />
      <Cart />
      <FooterLinks className="w-72 mt-24 mx-6" />
    </div>
  );
};

export default UserNav;
