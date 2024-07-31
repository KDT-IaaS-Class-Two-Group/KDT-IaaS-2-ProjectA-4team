import React, { FC, useState, useEffect } from "react";
import CartItemComponent from "./CartItem";

interface CartProps {
  items: { menu: string; unitPrice: number }[];
  eventHandle: (data: string) => void;
}

/**
 * @yuxincxoi 24.07.25
 * * 장바구니 컴포넌트
 * @param {array} items 선택된 장바구니 메뉴
 * @returns { JSXElement }
 */

const Cart: FC<CartProps> = ({ items, eventHandle }) => {
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

  const handleRemoveItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentElement = event.currentTarget.textContent;
    // const parentElement = currentElement.parentElement;
    // const grandparentElement = parentElement.parentElement;
    // const grandparentFirstChild = grandparentElement?.firstChild;
    // const grandparentFirstfirstChild = grandparentFirstChild?.firstChild;
    console.log(eventHandle(currentElement)); // 클릭된 버튼의 ID
  };

  return (
    <div>
      <div className="font-extrabold text-xl mx-8 my-5 relative z-10">Cart</div>
      {/* <div className="w-12 h-2 bg-yellow-200 left-4 top-9 absolute z-0"></div> */}
      <div className="h-96 overflow-scroll" onClick={handleRemoveItem}>
        {items.map((item, index) => (
          <CartItemComponent
            key={index}
            menu={item.menu}
            unitPrice={item.unitPrice}
            onPriceChange={handlePriceChange}
          />
        ))}
      </div>
      <div className="w-60 font-extrabold text-xl text-right mt-6 mx-6 pt-6 border-t border-dashed border-slate-500 relative z-10">
        {totalPrice}원
      </div>
    </div>
  );
};

export default Cart;
