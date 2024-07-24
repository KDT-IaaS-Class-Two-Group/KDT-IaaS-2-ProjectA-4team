import React from "react";
import UserHeaderComponent from "src/components/users/userHeaderComponent";
import UserMenuComponent from "src/components/users/userMenuComponent";

const MyPage:React.FC = () => {
  return (
    <>
      <UserHeaderComponent />
      <UserMenuComponent />
    </>
  );
}

export default MyPage;