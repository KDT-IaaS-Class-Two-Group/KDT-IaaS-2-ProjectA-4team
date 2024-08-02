import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const UserpageHook = () => {
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

  return {
    selectCategory,
    setSelectCategory,
    cartItems,
    handleAddToCart,
    handleRemoveItem,
  };
};
