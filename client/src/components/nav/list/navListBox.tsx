import React, { useState, useEffect } from "react";
import LinkButtonComponent from "../../button/link/linkButtonComponent";
import Image from "next/image";
import { useRouter } from "next/router";

/**
 * @crystal23733 24.07.29
 * @returns aside list
 */
const NavListBox: React.FC = () => {
  const router = useRouter();
  const [selectMenu, setSelectMenu] = useState("");

  useEffect(() => {
    const currentPath = router.pathname.split("/").pop() || "stockInfo";
    setSelectMenu(currentPath);
  }, [router.pathname]);

  const menus = {
    menusKo: [
      "재고 관리",
      "유통기한 관리",
      "매출 관리",
      "회원 관리",
      "인사이트",
    ],
    menusEn: [
      "stockInfo",
      "stockDate",
      "salesInquiry",
      "memberInfo",
      "insight",
    ],
  };

  return (
    <nav className="px-5">
      <ul>
        {menus.menusEn.map((menu, index) => (
          <li
            key={menu}
            className={
              selectMenu === menu
                ? "flex bg-cyan-500 bg-opacity-15 rounded-lg font-medium my-1 px-4 py-3"
                : "flex hover:bg-cyan-500 hover:bg-opacity-15 hover:rounded-lg font-normal text-gray-500 my-1 px-4 py-3"
            }
          >
            <div className="pt-1">
              <Image
                width={18}
                height={18}
                src={`/${menu}Img.png`}
                alt={menu}
              />
            </div>
            <LinkButtonComponent
              onClick={() => setSelectMenu(menu)}
              className={
                selectMenu === menu
                  ? "text-cyan-500 font-medium my-1 px-4 py-3"
                  : "font-normal text-gray-500 my-1 px-4 py-3"
              }
              href={`/admin/${menu}`}
            >
              {menus.menusKo[index]}
            </LinkButtonComponent>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavListBox;
