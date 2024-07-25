import React, { FC } from "react";

/**
 * @yuxincxoi 24.07.25
 * * 장바구니에 들어가는 개별 메뉴 컴포넌트
 * @returns { JSXElement }
 */

const CartItemComponent: FC = () => {
  return (
    <div className="px-10 py-3 w-72">
      <div className="flex justify-between text-base">
        <div id="menu">징징이다리 패티</div>
        <div id="price">4000원</div>
      </div>
      <div className="flex justify-start">
        <div id="minusMenu" className="bg-slate-600 w-6 h-6"></div>
        <div id="count" className="mx-3 font-light text-s">
          1
        </div>
        <div id="plusMenu" className="bg-slate-600 w-6 h-6"></div>
      </div>
    </div>
  );
};

export default CartItemComponent;
