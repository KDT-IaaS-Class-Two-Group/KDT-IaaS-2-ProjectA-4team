import { useState, useEffect } from "react";

export const CartHook = (
  items: { menu: string; unitPrice: number; id: string }[],
  onCount: (count: number) => void,
) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handlePriceChange = (price: number, count: number) => {
    try {
      setTotalPrice((prevTotal) => {
        const updatedTotal = prevTotal + price;
        return updatedTotal;
      });
      onCount(count);
    } catch (error) {
      console.error("Failed to change price: ", error);
      setError("가격 계산에 실패하였습니다.");
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
      console.error("Failed to set initial total price: ", error);
      setError("총액 계산에 실패하였습니다.");
    }
  }, [items]);

  return {
    totalPrice,
    handlePriceChange,
    error,
  };
};
