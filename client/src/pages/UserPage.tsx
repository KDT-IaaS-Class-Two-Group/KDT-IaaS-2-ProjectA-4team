import React, { FC, useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import UserMenu from "src/components/users/UserMenu";
import MenuItems from "src/components/users/MenuItems";
import LoginInfoComponent from "src/components/LoginInfo";
import Cart from "src/components/users/Cart";
import FooterLinks from "src/components/footerComponent";
import ButtonComponent from "src/components/CustomButton";

// interface ItemsContextType {
//   items: string;
//   setItems: React.Dispatch<React.SetStateAction<string>>;
// }

// interface ItemsProviderProps {
//   children: ReactNode;
// }

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

  // const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

  // const ItemsProvider: React.FC<ItemsProviderProps> = ({ children }) => {
  //   const [items, setItems] = useState("");

  //   return (
  //     <ItemsContext.Provider value={{ items, setItems }}>
  //       {children}
  //     </ItemsContext.Provider>
  //   );
  // };

  useEffect(() => {
    const category = router.query.category as string;
    if (category) {
      setSelectCategory(category);
    }
  }, [router.query.category]);

  const handleAddToCart = (menu: string, unitPrice: number) => {
    setCartItems((prevItems) => [...prevItems, { menu, unitPrice }]);
  };

  const handleRemoveItem = (menu: string) => {
    const updatedItems = cartItems.filter((item) => item.menu !== menu);
    setCartItems(updatedItems);
  };

  return (
    <div>
      <div className="m-5 w-32 h-20 bg-slate-500">Logo</div>
      <UserMenu setSelectCategory={setSelectCategory} />
      <MenuItems
        selectCategory={selectCategory}
        onAddToCart={handleAddToCart}
      />
      <div className="w-72 shadow-xl h-screen fixed top-0 right-0">
        <LoginInfoComponent
          className="w-72 ml-6 mt-6 mb-20"
          email="rockcoders@kdt.com"
        />
        <Cart items={cartItems} removedItem={handleRemoveItem} />
        <ButtonComponent
          type="submit"
          className="w-60 bg-yellow-400 text-white hover:text-yellow-400 hover:border-yellow-400 hover:border text-lg font-bold rounded-3xl mx-6 my-8"
          onClick={() => console.log("buy!")}
        >
          Buy !
        </ButtonComponent>
        <FooterLinks className="w-72 mt-20 mx-6" />
      </div>
    </div>
  );
};

export default UserPage;
