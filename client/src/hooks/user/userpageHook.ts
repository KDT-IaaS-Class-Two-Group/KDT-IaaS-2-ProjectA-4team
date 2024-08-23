import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import salesHistoryFetch from "src/model/sale/history/salesHistoryFetch";
import getUserEmailFetch from "src/model/user/email/getUserEmailFetch";
import { userPageHookErrMessages } from "static/hooks/user/userPageHook.static";
import { CartHook } from "../cart/cartHook";

/**
 * @yuxincxoi 24.08.07
 * * 사용자 페이지의 카테고리 선택, 장바구니 관리, 모달 상태 등을 처리
 * @returns
 *   - selectCategory - 선택된 카테고리
 *   - setSelectCategory - 선택된 카테고리를 설정하는 함수
 *   - cartItems - 장바구니에 담긴 제품
 *   - isModalOpen - 모달창(장바구니에 메뉴가 이미 존재합니다) 열기
 *   - isPurchaseModalOpen - 모달창(구매하시겠습니까) 열기
 *   - closeModal - 모달창(장바구니에 메뉴가 이미 존재합니다)을 닫는 함수
 *   - closePurchaseModal 모달창(구매하시겠습니까)을 닫는 함수
 *   - confirmPurchase - 구매 확정 후 실행되는 함수
 *   - error - 에러 메세지
 *   - handleAddToCart - 장바구니에 제품을 추가하는 함수
 *   - handleRemoveItem - 장바구니 제품을 제거하는 함수
 *   - purchase - 구매하기 버튼 클릭시 실행되는 함수
 *   - isCompletePurchase - 모달창(구매완료) 열기
 *   - onCount - 클릭한 제품이 장바구니에 존재하지 않으면 장바구니에 제품 추가하는 함수
 *   - closeCompletePurchaseModal - 모달창(구매완료)을 닫는 함수
 *   - closeEmptyMoal - 모달창(빈장바구니)을 닫는 함수
 *   - isEmpty - 모달창(빈장바구니) 열기
 */
export const UserpageHook = () => {
  const router = useRouter();
  const [selectCategory, setSelectCategory] = useState("bread");
  const [cartItems, setCartItems] = useState<
    [] | { menu: string; unitPrice: number; id: string }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] =
    useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isCompletePurchase, setIsCompletePurchase] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<
    { productName: string; quantity: number }[]
  >([]);

  // 구매하기 버튼 클릭시 실행되는 함수
  const purchase = () => {
    try {
      // 장바구니에 제품이 존재하지 않을 때
      if (cartItems.length === 0) {
        setIsEmpty(true);
        // 모달창 자동닫기
        setTimeout(() => {
          setIsEmpty(false);
        }, 3000);
      } else {
        setIsPurchaseModalOpen(true);
      }
    } catch (error) {
      throw error;
    }
  };

  const completePurchase = () => {
    try {
      setIsCompletePurchase(true);
      // 모달창 자동닫기
      setTimeout(() => {
        setIsCompletePurchase(false);
      }, 3000);
    } catch (error) {
      throw error;
    }
  };

  // 구매한 사용자 이메일 데이터베이스에서 가져오는 함수
  const loadData = async () => {
    try {
      const userEmail = await getUserEmailFetch();
      return userEmail;
    } catch (error) {
      console.error("사용자 이메일을 가져오지 못했습니다.");
      return null;
    }
  };

  // 구매 확정시 실행되는 함수
  const confirmPurchase = async () => {
    // 구매 날짜
    const today = new Date().toISOString().split("T")[0];

    const userEmail = await loadData();
    if (!userEmail) {
      throw new Error("User email is required but was not found.");
    }

    // 구매 정보 데이터 데이터베이스에 저장
    const purchaseData = await salesHistoryFetch(userEmail, products, today);

    setCartItems([]); // 장바구니 비우기
    setProducts([]); // 장바구니와 제품 목록 비우기

    setIsPurchaseModalOpen(false);
    completePurchase();
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

  const closeCompletePurchaseModal = () => setIsCompletePurchase(false);
  const closeEmptyMoal = () => setIsEmpty(false);

  // 카테고리 변경시 실행
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

  // 장바구니에 제품 추가하는 함수
  const handleAddToCart = (menu: string, unitPrice: number, id: string) => {
    try {
      setCartItems((prevItems) => {
        const itemIndex = prevItems.findIndex((item) => item.menu === menu);
        // 제품이 장바구니에 존재하지 않는다면 제품 추가
        if (itemIndex === -1) {
          setProducts([...products, { productName: menu, quantity: 1 }]);
          return [...prevItems, { menu, unitPrice, id }];
        }
        openModal();
        return prevItems;
      });
    } catch (error) {
      setError(userPageHookErrMessages.failedAddCategories);
    }
  };

  // 클릭한 제품이 장바구니에 존재하지 않으면 장바구니에 제품을 추가하거나
  // 이미 존재하는 경우 수량을 업데이트하는 함수
  const onCount = (count: number, menu: string) => {
    setProducts((prevProducts) => {
      const productIndex = prevProducts.findIndex(
        (product) => product.productName === menu,
      );

      // 제품이 장바구니에 존재하면 수량 업데이트
      if (productIndex !== -1) {
        prevProducts[productIndex].quantity = count;
      } else {
        prevProducts.push({ productName: menu, quantity: count });
      }

      return [...prevProducts];
    });
  };

  // 장바구니 제품을 제거하는 함수
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
    isCompletePurchase,
    closeModal,
    closePurchaseModal,
    confirmPurchase,
    error,
    handleAddToCart,
    onCount,
    handleRemoveItem,
    closeCompletePurchaseModal,
    purchase,
    closeEmptyMoal,
    isEmpty,
  };
};
