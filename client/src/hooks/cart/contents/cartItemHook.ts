import { useState } from "react";
import { failedMessages } from "static/hooks/cart/contents/cartItemHook.static";

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
