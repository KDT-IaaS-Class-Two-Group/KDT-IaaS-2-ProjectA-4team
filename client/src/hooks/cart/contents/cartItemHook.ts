import { useState } from "react";
import { failedMessages } from "static/hooks/cart/contents/cartItemHook.static";

/**
 * @yuxincxoi 24.08.02
 * * 장바구니 아이템의 수량과 가격을 관리
 * @param {number} unitPrice 제품 단가
 * @param {(price: number) => void} onPriceChange 가격이 변경될 때 호출되는 콜백 함수
 * @param {string} menu 장바구니에 담길 클릭된 제품
 * @returns
 *   - count - 제품 수량
 *   - price - 제품의 단가 × 수량
 *   - incrementCount - 제품 수량을 증가시키는 함수
 *   - decrementCount - 제품 수량을 감소시키는 함수
 *   - error - 에러 메세지
 */

export const CartItemHook = (
  unitPrice: number,
  onPriceChange: (price: number, count: number, menu: string) => void,
  menu: string,
) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(unitPrice);
  const [error, setError] = useState<string | null>(null);

  // 가격을 업데이트하는 함수
  const updatePrice = (newCount: number) => {
    try {
      const newPrice = newCount * unitPrice; // 수량 x 단가
      setPrice(newPrice); // 가격 상태 업데이트
      onPriceChange(newPrice - price, newCount, menu); // 가격 차, 수량, 메뉴를 기반으로 콜백 함수 호출
    } catch (error) {
      setError(failedMessages.failedUpdatePriceMessage);
    }
  };

  // 수량을 증가시키는 함수
  const incrementCount = () => {
    try {
      const newCount = count + 1;
      setCount(newCount);
      updatePrice(newCount);
    } catch (error) {
      setError(failedMessages.failedIncrementCountMessage);
    }
  };

  // 수량을 감소시키는 함수
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
