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
  const [cartItems, setCartItems] = useState<
    { menu: string; unitPrice: number }[]
  >([]);

  useEffect(() => {
    const category = router.query.category as string;
    if (category) {
      setSelectCategory(category);
    }
  }, [router.query.category]);

  const handleAddToCart = (menu: string, unitPrice: number) => {
    setCartItems((prevItems) => [...prevItems, { menu, unitPrice }]);
  };

  return (
    <div>
      <div className="m-5 w-32 h-20 bg-slate-500">Logo</div>
      <UserMenu setSelectCategory={setSelectCategory} />
      <MenuItems
        selectCategory={selectCategory}
        onAddToCart={handleAddToCart}
      />
      <UserNav />
      {/* <UserNav /> */}
    </div>
  );
};

export default UserPage;
