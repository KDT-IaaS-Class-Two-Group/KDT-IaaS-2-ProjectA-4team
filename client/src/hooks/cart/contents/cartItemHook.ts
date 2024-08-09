import { useState } from "react";
import { failedMessages } from "static/hooks/cart/contents/cartItemHook.static";

/**
 * @yuxincxoi 24.08.02
 * * `CartItemHook` 훅은 장바구니 아이템의 수량과 가격을 관리합니다.
 *
 * @param {number} unitPrice - 아이템의 단가
 * @param {(price: number) => void} onPriceChange - 가격이 변경될 때 호출되는 콜백 함수
 *
 * @returns {{
 *   count: number,                  // 현재 아이템의 수량
 *   price: number,                  // 현재 아이템의 총 가격 (단가 × 수량)
 *   incrementCount: () => void,     // 아이템 수량을 증가시키는 함수
 *   decrementCount: () => void,     // 아이템 수량을 감소시키는 함수
 *   error: string | null            // 오류 메시지 (오류가 없으면 null)
 * }}
 */

export const CartItemHook = (
  unitPrice: number,
  onPriceChange: (price: number) => void,
) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(unitPrice);
  const [error, setError] = useState<string | null>(null);

  const updatePrice = (newCount: number) => {
    try {
      const newPrice = newCount * unitPrice;
      setPrice(newPrice);
      onPriceChange(newPrice - price);
    } catch (error) {
      setError(failedMessages.failedUpdatePriceMessage);
    }
  };

  const incrementCount = () => {
    try {
      const newCount = count + 1;
      setCount(newCount);
      updatePrice(newCount);
    } catch (error) {
      setError(failedMessages.failedIncrementCountMessage);
    }
  };

  const decrementCount = () => {
    try {
      if (count > 1) {
        const newCount = count - 1;
        setCount(newCount);
        updatePrice(newCount);
      }
    } catch (error) {
      setError(failedMessages.failedDecrementCountMessage);
    }
  };

  return {
    count,
    price,
    incrementCount,
    decrementCount,
    error,
  };
};
