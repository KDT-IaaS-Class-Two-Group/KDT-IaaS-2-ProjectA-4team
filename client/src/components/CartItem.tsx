import React, { FC } from "react";

interface CartItemComponentProps {
  menu: string;
  price: string;
  count: number;
}

/**
 * @yuxincxoi 24.07.25
 * * 장바구니에 들어가는 개별 메뉴 컴포넌트
 * @param {string} menu 메뉴명
 * @param {string} price 가격
 * @param {number} count 구매 개수
 * @returns { JSXElement }
 */

const CartItemComponent: FC<CartItemComponentProps> = ({
  menu,
  price,
  count,
}) => {
  return (
    <div className="px-10 py-3 w-72">
      <div className="flex justify-between text-base">
        <div id="menu">{menu}</div>
        <div id="price">{price}</div>
      </div>
      <div className="flex justify-start">
        <div id="minusMenu" className="bg-slate-600 w-6 h-6"></div>
        <div id="count" className="mx-3 font-light text-s">
          {count}
        </div>
        <div id="plusMenu" className="bg-slate-600 w-6 h-6"></div>
      </div>
    </div>
  );
};

export default CartItemComponent;
