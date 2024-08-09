import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { userPageHookErrMessages } from "static/hooks/user/userPageHook.static";

export const UserpageHook = () => {
  const router = useRouter();
  const [selectCategory, setSelectCategory] = useState("bread");
  const [cartItems, setCartItems] = useState<
    [] | { menu: string; unitPrice: number }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] =
    useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const purchase = async () => {
    try {
      setIsPurchaseModalOpen(true);
    } catch (error) {
      throw error;
    }
  };

  const confirmPurchase = () => {
    setCartItems([]);
    setIsPurchaseModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const closePurchaseModal = () => setIsPurchaseModalOpen(false);

  useEffect(() => {
    try {
      const category = router.query.category as string;
      if (category) {
        setSelectCategory(category);
      }
    } catch (error) {
      setError(userPageHookErrMessages.failedGetCategories);
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
      setError(userPageHookErrMessages.failedAddCategories);
    }
  };

  const handleRemoveItem = (menu: string) => {
    try {
      const updatedItems = cartItems.filter((item) => item.menu !== menu);
      setCartItems(updatedItems);
    } catch (error) {
      setError(userPageHookErrMessages.failedDeleteCategories);
    }
  };

  return {
    selectCategory,
    setSelectCategory,
    cartItems,
    isModalOpen,
    isPurchaseModalOpen,
    closeModal,
    closePurchaseModal,
    confirmPurchase,
    error,
    handleAddToCart,
    handleRemoveItem,
    purchase,
  };
};
