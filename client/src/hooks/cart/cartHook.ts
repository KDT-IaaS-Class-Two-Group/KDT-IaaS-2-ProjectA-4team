import { useState, useEffect } from "react";
import { failedPriceMessages } from "static/hooks/cart/cartHook.static";

/**
 * @yuxincxoi 24.08.02
 * * `CartHook` 훅은 장바구니의 총 가격을 관리하고 업데이트합니다.
 *
 * @param {Array<{ menu: string; unitPrice: number }>} items - 장바구니에 있는 아이템들의 배열. 각 아이템은 메뉴 이름과 단가를 포함합니다.
 *
 * @returns {{
 *   totalPrice: number,              // 현재 장바구니의 총 가격
 *   handlePriceChange: (price: number) => void,  // 가격을 업데이트하는 함수
 *   error: string | null             // 오류 메시지 (오류가 없으면 null)
 * }}
 */
export const CartHook = (items: { menu: string; unitPrice: number }[]) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handlePriceChange = (price: number) => {
    try {
      setTotalPrice((prevTotal) => {
        const updatedTotal = prevTotal + price;
        return updatedTotal;
      });
    } catch (error) {
      setError(failedPriceMessages.failedCalcPriceMessage);
    }
  };

  useEffect(() => {
    try {
      const initialTotalPrice = items.reduce(
        (acc, item) => acc + item.unitPrice,
        0,
      );
      setTotalPrice(initialTotalPrice);
    } catch (error) {
      setError(failedPriceMessages.failedCalcTotalPriceMessage);
    }
  }, [items]);

  return {
    totalPrice,
    handlePriceChange,
    error,
  };
};
