import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const UserpageHook = () => {
  const router = useRouter();
  const [selectCategory, setSelectCategory] = useState("bread");
  const [cartItems, setCartItems] = useState<
    { menu: string; unitPrice: number }[]
  >([]);
  const [error, setError] = useState<string | null>(null);

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
    try {
      const category = router.query.category as string;
      if (category) {
        setSelectCategory(category);
      }
    } catch (error) {
      console.error("Failed to set selectCategory: ", error);
      setError("카테고리를 불러오지 못했습니다.");
    }
  }, [router.query.category]);

  const handleAddToCart = (menu: string, unitPrice: number) => {
    try {
      setCartItems((prevItems) => [...prevItems, { menu, unitPrice }]);
    } catch (error) {
      console.error("Failed to add item to cart: ", error);
      setError("장바구니에 아이템을 추가하지 못했습니다.");
    }
  };

  const handleRemoveItem = (menu: string) => {
    try {
      const updatedItems = cartItems.filter((item) => item.menu !== menu);
      setCartItems(updatedItems);
    } catch (error) {
      console.error("Failed to remove item from cart: ", error);
      setError("장바구니의 아이템을 삭제하지 못했습니다.");
    }
  };

  return {
    selectCategory,
    setSelectCategory,
    cartItems,
    error,
    handleAddToCart,
    handleRemoveItem,
  };
};
