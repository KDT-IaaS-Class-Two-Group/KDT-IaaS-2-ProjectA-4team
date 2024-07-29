import React from "react";
import LoginInfoComponent from "./LoginInfo";
import Cart from "./Cart";
import FooterLinks from "./footerComponent";

const UserNav = () => {
  return (
    <div>
      <LoginInfoComponent email="rockcoders@kdt.com" />
      <Cart />
      <FooterLinks />
    </div>
  );
};

export default UserNav;
