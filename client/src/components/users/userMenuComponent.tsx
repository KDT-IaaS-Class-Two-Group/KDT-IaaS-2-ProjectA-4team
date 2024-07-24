import { Menubar, MenubarMenu, MenubarTrigger } from "components/ui/menubar";
import React from "react";

const UserMenuComponent:React.FC = () => {
  return (
    <div className="box-border w-full h-10% m-0 flex justify-center items-center mt-4">
      <Menubar className="border-none w-70% h-full m-0 grid grid-cols-5 gap-10 justify-center items-center">
        <MenubarMenu>
          <MenubarTrigger>빵</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>패티</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>야채</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>소스</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>음료</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default UserMenuComponent;