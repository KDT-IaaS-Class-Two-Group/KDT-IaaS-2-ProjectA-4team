import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "components/ui/navigation-menu";
import React from "react";

const NavListBox: React.FC = () => {
  return (
    <NavigationMenu className="h-90%">
      <NavigationMenuList className="flex flex-col h-full">
        <NavigationMenuItem className="relative mb-2">
          <NavigationMenuTrigger className="text-lg py-3 px-6 bg-gray-100 rounded-md hover:bg-gray-200">
            재고관리
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 mt-2 bg-white shadow-lg rounded-md min-w-[200px] z-10">
            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              <button>재고조회</button>
            </NavigationMenuLink>
            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              <button>유통기한 관리</button>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="relative mb-2">
          <NavigationMenuTrigger className="text-lg py-3 px-6 bg-gray-100 rounded-md hover:bg-gray-200">
            매출관리
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 mt-2 bg-white shadow-lg rounded-md min-w-[200px] z-10">
            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              <button>매출조회</button>
            </NavigationMenuLink>
            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              <button>매출순위</button>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="relative mb-2">
          <NavigationMenuTrigger className="text-lg py-3 px-6 bg-gray-100 rounded-md hover:bg-gray-200">
            회원관리
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 mt-2 bg-white shadow-lg rounded-md min-w-[200px] z-10">
            <NavigationMenuLink className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              <button>회원조회</button>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavListBox;
