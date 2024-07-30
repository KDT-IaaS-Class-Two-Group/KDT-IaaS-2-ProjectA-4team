import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import UserNav from "src/components/users/UserNav";
import UserMenu from "src/components/users/UserMenu";
import MenuItems from "src/components/users/MenuItems";

/**
 * @yuxincxoi 24.07.25
 * * 물건을 구입할 수 있는 사용자 페이지
 * @returns { JSXElement }
 */

const UserPage: FC = () => {
  const router = useRouter();
  const [selectCategory, setSelectCategory] = useState("bread");

  useEffect(() => {
    const category = router.query.category as string;
    if (category) {
      setSelectCategory(category);
    }
  }, [router.query.category]);

  return (
    <div>
      <UserMenu setSelectCategory={setSelectCategory} />
      <MenuItems selectCategory={selectCategory} />
      <UserNav />
    </div>
  );
};

export default UserPage;
