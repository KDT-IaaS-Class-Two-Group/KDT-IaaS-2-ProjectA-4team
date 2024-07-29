import React from "react";
import LoginInfoComponent from "./LoginInfo";
import Cart from "./Cart";
import FooterLinks from "./footerComponent";

const UserNav = () => {
  return (
    <div>
      <LoginInfoComponent
        className="w-72 px-5 justify-center mt-4 mb-20"
        email="rockcoders@kdt.com"
      />
      <Cart />
      <FooterLinks className="w-72 mt-24 mx-6" />
    </div>
  );
};

export default UserNav;
