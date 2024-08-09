import { useState, useEffect } from "react";
import { failedPriceMessages } from "static/hooks/cart/cartHook.static";

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
