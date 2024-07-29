import React, { FC, useState } from "react";
import CartItemComponent from "./CartItem";

/**
 * @yuxincxoi 24.07.25
 * * 장바구니 컴포넌트
 * @returns { JSXElement }
 */

const Cart: FC = () => {
  const [totalPrice, setTotalPrice] = useState(20000);

  const handlePriceChange = (price: number) => {
    setTotalPrice((prevTotal) => {
      const updatedTotal = prevTotal + price;
      return updatedTotal;
    });
  };

  return (
    <div className="w-72">
      <div className="font-extrabold text-2xl m-4 relative z-10">Cart</div>
      <div className="w-12 h-2 bg-yellow-200 left-4 top-9 absolute z-0"></div>
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
      <div className="w-72 font-extrabold text-xl text-right mt-6 px-10 pt-6 border-t-2 border-dashed border-black relative z-10">
        {totalPrice}원
      </div>
    </div>
  );
};

export default Cart;
