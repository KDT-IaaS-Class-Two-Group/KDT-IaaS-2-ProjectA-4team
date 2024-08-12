import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import salesHistoryFetch from "src/model/sale/history/salesHistoryFetch";
import getUserEmailFetch from "src/model/user/email/getUserEmailFetch";
import { userPageHookErrMessages } from "static/hooks/user/userPageHook.static";
import { CartHook } from "../cart/cartHook";

type CartItem = {
  menu: string;
  unitPrice: number;
  id: string;
  quantity: number;
};

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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] =
    useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<
    { productName: string; quantity: number }[]
  >([]);

  const purchase = () => {
    try {
      setIsPurchaseModalOpen(true);
    } catch (error) {
      throw error;
    }
  };

  const loadData = async () => {
    try {
      const userEmail = await getUserEmailFetch();
      return userEmail;
    } catch (error) {
      console.error("사용자 이메일을 가져오지 못했습니다.");
      return null;
    }
  };

  const confirmPurchase = async () => {
    const today = new Date().toISOString().split("T")[0];

    const userEmail = await loadData();
    if (!userEmail) {
      throw new Error("User email is required but was not found.");
    }

    const purchaseData = await salesHistoryFetch(
      userEmail,
      products,
      totalPrice,
      today,
    );

    setCartItems([]);
    setIsPurchaseModalOpen(false);
    console.log(purchaseData);
    return purchaseData;
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

  const handleAddToCart = (menu: string, unitPrice: number, id: string) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.menu === menu);
      if (itemIndex === -1) {
        setProducts((prevProducts) => [...prevProducts, { productName: id, quantity: 1 }]);
        return [...prevItems, { menu, unitPrice, id, quantity: 1 }];
      }
      // 이미 존재하는 아이템의 수량을 증가
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.productName === id ? { ...product, quantity: product.quantity + 1 } : product
        )
      );
      return prevItems.map((item, index) =>
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const onCount = (count: number, menu: string) => {
    setProducts((prevProducts) => {
      const productIndex = prevProducts.findIndex(
        (product) => product.productName === menu
      );

      if (productIndex !== -1) {
        prevProducts[productIndex].quantity = count;
      } else {
        prevProducts.push({ productName: menu, quantity: count });
      }

      return [...prevProducts];
    });
  };

  const { totalPrice } = CartHook(cartItems, onCount);

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
    onCount,
    handleRemoveItem,
    purchase,
  };
};
