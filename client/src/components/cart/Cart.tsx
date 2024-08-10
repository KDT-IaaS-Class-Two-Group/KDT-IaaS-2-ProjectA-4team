import React, { FC } from "react";
import CartItemComponent from "./contents/CartItem";
import { CartHook } from "src/hooks/cart/cartHook";
import CartProps from "src/interfaces/components/cart/Cart.interface";

/**
 * @yuxincxoi 24.07.25
 * * 장바구니 컴포넌트
 * @param {array} items 장바구니 메뉴
 * @param {function} setItems 장바구니 메뉴를 업데이트 시켜주는 함수
 * @param {function} removedItem 삭제될 제품 데이터를 전달해주는 콜백함수
 * @returns { JSX.Element }
 */

const Cart: FC<CartProps> = ({ items, removedItem }) => {
  const { totalPrice, handlePriceChange, error } = CartHook(items);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="font-extrabold text-xl mx-8 my-5 relative z-10">Cart</div>
      <div className="h-64 overflow-scroll">
        {!items.length ? (
          <div className="w-44 h-64 content-center mx-auto text-gray-400">
            장바구니가 비어있습니다.
          </div>
        ) : (
          items.map((item, index) => (
            <CartItemComponent
              key={index}
              menu={item.menu}
              unitPrice={item.unitPrice}
              onPriceChange={handlePriceChange}
              removedItem={removedItem}
            />
          ))
        )}
      </div>
      <div className="w-60 font-extrabold text-xl text-right mt-6 mx-6 pt-6 border-t border-dashed border-slate-500 relative z-10">
        {totalPrice}원
      </div>
    </div>
  );
};

export default Cart;
