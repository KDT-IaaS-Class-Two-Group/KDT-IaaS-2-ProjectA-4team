import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const UserpageHook = () => {
  const router = useRouter();
  const [selectCategory, setSelectCategory] = useState("bread");
  const [cartItems, setCartItems] = useState<
    { menu: string; unitPrice: number }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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

  const openModal = () => {
    setIsModalOpen(true);
    console.log("open");
  };
  const closeModal = () => setIsModalOpen(false);

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
      setCartItems((prevItems) => {
        const itemIndex = prevItems.findIndex((item) => item.menu === menu);
        if (itemIndex === -1) {
          return [...prevItems, { menu, unitPrice }];
        }
        openModal();
        return prevItems;
      });
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
    isModalOpen,
    closeModal,
    error,
    handleAddToCart,
    handleRemoveItem,
  };
};