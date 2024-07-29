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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>재고관리</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <button>재고조회</button>
              <button>유통기한 관리</button>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>매출관리</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <button>매출조회</button>
              <button>매출순위</button>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>회원관리</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <button>회원조회</button>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavListBox;
