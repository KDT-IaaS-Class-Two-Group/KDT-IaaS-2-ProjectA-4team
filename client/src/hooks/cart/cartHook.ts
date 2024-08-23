import { useState, useEffect } from "react";
import { failedPriceMessages } from "static/hooks/cart/cartHook.static";

/**
 * @yuxincxoi 24.08.02
 * * 장바구니 총액 관리 및 업데이트
 * @param {Array<{ menu: string; unitPrice: number }>} items 장바구니 제품 배열
 * @param {(count: number, menu: string) => void} onCount 수량이 변경될 때 호출되는 콜백 함수
 * @returns
 *   - totalPrice - 장바구니 총액
 *   - handlePriceChange - 가격을 업데이트하는 함수
 *   - error - 에러 메세지
 */

export const CartHook = (
  items: { menu: string; unitPrice: number }[],
  onCount: (count: number, menu: string) => void,
) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // 장바구니 총액을 업데이트하는 함수
  const handlePriceChange = (price: number, count: number, menu: string) => {
    try {
      setTotalPrice((prevTotal) => {
        const updatedTotal = prevTotal + price;
        return updatedTotal;
      });
      onCount(count, menu);
    } catch (error) {
      setError(failedPriceMessages.failedCalcPriceMessage);
    }
  };

  // 장바구니 제품이 변경될 때마다 총액 업데이트
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
