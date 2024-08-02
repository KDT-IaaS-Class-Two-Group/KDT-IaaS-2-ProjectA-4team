import { useState } from "react";

export const CartItemHook = (
  unitPrice: number,
  onPriceChange: (price: number) => void,
) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(unitPrice);

  const updatePrice = (newCount: number) => {
    const newPrice = newCount * unitPrice;
    setPrice(newPrice);
    onPriceChange(newPrice - price);
  };

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    updatePrice(newCount);
  };

  const decrementCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updatePrice(newCount);
    }
  };

  return {
    count,
    price,
    incrementCount,
    decrementCount,
  };
};
