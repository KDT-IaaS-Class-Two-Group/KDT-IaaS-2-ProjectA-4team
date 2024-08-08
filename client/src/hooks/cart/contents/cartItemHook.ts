import { useState } from "react";

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
      console.error("Failed to update price: ", error);
      setError("가격 업데이트에 실패했습니다.");
    }
  };

  const incrementCount = () => {
    try {
      const newCount = count + 1;
      setCount(newCount);
      updatePrice(newCount);
    } catch (error) {
      console.error("Failed to increment count: ", error);
      setError("개수가 증가하지 않았습니다.");
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
      console.error("Failed to decrement count: ", error);
      setError("개수가 감소하지 않았습니다.");
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
