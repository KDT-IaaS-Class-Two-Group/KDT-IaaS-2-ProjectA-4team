import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { userPageHookErrMessages } from "static/hooks/user/userPageHook.static";

/**
 * @yuxincxoi 24.08.07
 * * `UserpageHook` 훅은 사용자 페이지에서 카테고리 선택, 장바구니 관리, 모달 상태 등을 처리합니다.
 *
 * @returns {{
 *   selectCategory: string;              // 현재 선택된 카테고리
 *   setSelectCategory: React.Dispatch<React.SetStateAction<string>>; // 선택된 카테고리를 설정하는 함수
 *   cartItems: { menu: string; unitPrice: number }[]; // 장바구니에 담긴 항목들
 *   isModalOpen: boolean;                // 모달 창의 열림 상태
 *   isPurchaseModalOpen: boolean;        // 구매 모달 창의 열림 상태
 *   closeModal: () => void;              // 모달 창을 닫는 함수
 *   closePurchaseModal: () => void;      // 구매 모달 창을 닫는 함수
 *   confirmPurchase: () => void;         // 구매를 확인하고 장바구니를 비우는 함수
 *   error: string | null;                // 발생한 오류 메시지
 *   handleAddToCart: (menu: string, unitPrice: number) => void; // 장바구니에 항목을 추가하는 함수
 *   handleRemoveItem: (menu: string) => void; // 장바구니에서 항목을 제거하는 함수
 *   purchase: () => Promise<void>;       // 구매 모달 창을 열기 위한 함수
 * }}
 */
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

  /**
   * 구매 모달 창을 열기 위한 함수입니다.
   *
   * @throws {Error} 모달 열기 중 오류가 발생할 경우
   */
  const purchase = async () => {
    try {
      setIsPurchaseModalOpen(true);
    } catch (error) {
      throw error;
    }
  };

  /**
   * 구매를 확인하고 장바구니를 비우는 함수입니다.
   */
  const confirmPurchase = () => {
    setCartItems([]);
    setIsPurchaseModalOpen(false);
  };

  /**
   * 모달 창을 여는 함수입니다.
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * 모달 창을 닫는 함수입니다.
   */
  const closeModal = () => setIsModalOpen(false);

  /**
   * 구매 모달 창을 닫는 함수입니다.
   */
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
