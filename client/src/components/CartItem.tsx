import React, { FC, useState, useEffect } from "react";

interface CartItemComponentProps {
  menu: string;
  unitPrice: number;
  onPriceChange: (price: number) => void;
}

/**
 * @yuxincxoi 24.07.25
 * * 장바구니에 들어가는 개별 메뉴 컴포넌트
 * @param {string} menu 메뉴명
 * @param {number} unitPrice 가격
 * @param {function} onPriceChange 총액을 업데이트해주는 함수
 * @returns { JSXElement }
 */

const CartItemComponent: FC<CartItemComponentProps> = ({
  menu,
  unitPrice,
  onPriceChange,
}) => {
  const initialCount = 1;
  const [count, setCount] = useState(initialCount);
  const [price, setPrice] = useState(unitPrice);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 1 ? count - 1 : count);

  useEffect(() => {
    const newPrice = count * unitPrice;
    setPrice(newPrice);
    onPriceChange(newPrice);
  }, [count, unitPrice, onPriceChange]);

  return (
    <div className="px-10 py-3 w-72">
      <div className="flex justify-between text-base">
        <div id="menu">{menu}</div>
        <div id="price">{price}원</div>
      </div>
      <div className="flex justify-start">
        <div
          onClick={decrementCount}
          id="minusMenu"
          className="bg-slate-600 w-6 h-6"
        ></div>
        <div id="count" className="mx-3 font-light text-s">
          {count}
        </div>
        <div
          onClick={incrementCount}
          id="plusMenu"
          className="bg-slate-600 w-6 h-6"
        ></div>
      </div>
    </div>
  );
};

export default CartItemComponent;
