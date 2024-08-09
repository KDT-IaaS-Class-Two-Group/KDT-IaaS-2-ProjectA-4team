import React from "react";
import LoginInfoComponent from "../../info/login/LoginInfo";
import Cart from "../../cart/Cart";
import FooterLinks from "../../footer/footerComponent";

/**
 * @yuxincxoi 24.07.29
 * * 사용자페이지에 사용될 네비게이션
 * @returns {JSXElement}
 */

const UserNav = () => {
  return (
    <div className="fixed top-0 right-0 h-screen shadow-xl w-72">
      <LoginInfoComponent className="mt-6 mb-20 ml-6 w-72" />
      {/* <Cart /> */}
      <FooterLinks className="mx-6 mt-24 w-72" />
    </div>
  );
};

export default UserNav;
