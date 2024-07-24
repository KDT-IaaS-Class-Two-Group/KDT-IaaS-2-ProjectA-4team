import { MenubarMenu, MenubarTrigger } from "components/ui/menubar";
import React from "react";

const UserMenuComponent:React.FC = () => {
  return (
    <MenubarMenu>
      <MenubarTrigger>빵</MenubarTrigger>
    </MenubarMenu>
  );
}

export default UserMenuComponent;