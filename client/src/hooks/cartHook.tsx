import { useState, useEffect } from "react";

export const CartHook = (items: { menu: string; unitPrice: number }[]) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePriceChange = (price: number) => {
    setTotalPrice((prevTotal) => {
      const updatedTotal = prevTotal + price;
      return updatedTotal;
    });
  };

  useEffect(() => {
    const initialTotalPrice = items.reduce(
      (acc, item) => acc + item.unitPrice,
      0,
    );
    setTotalPrice(initialTotalPrice);
  }, [items]);

  return {
    totalPrice,
    handlePriceChange,
  };
};
