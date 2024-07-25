import React, { FC, useState } from "react";
import CartItemComponent from "./CartItem";

/**
 * @yuxincxoi 24.07.25
 * * 장바구니 컴포넌트
 * @returns { JSXElement }
 */

const Cart: FC = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePriceChange = (price: number) => {
    setTotalPrice((prevTotal) => {
      const updatedTotal = prevTotal + price;
      return updatedTotal;
    });
  };

  return (
    <div>
      <div>Cart</div>
      <div>
        <CartItemComponent
          menu="게살 패티"
          unitPrice={4000}
          onPriceChange={(price) => handlePriceChange(price)}
        />
        <CartItemComponent
          menu="징징이다리 패티"
          unitPrice={4000}
          onPriceChange={(price) => handlePriceChange(price)}
        />
        <CartItemComponent
          menu="집게사장 손 패티"
          unitPrice={4000}
          onPriceChange={(price) => handlePriceChange(price)}
        />
        <CartItemComponent
          menu="치킨 패티"
          unitPrice={4000}
          onPriceChange={(price) => handlePriceChange(price)}
        />
        <CartItemComponent
          menu="불고기 패티"
          unitPrice={4000}
          onPriceChange={(price) => handlePriceChange(price)}
        />
      </div>
      <div>{totalPrice}</div>
    </div>
  );
};

export default Cart;
