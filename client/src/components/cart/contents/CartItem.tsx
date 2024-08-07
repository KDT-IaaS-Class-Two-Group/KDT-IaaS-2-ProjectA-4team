import React, { FC } from "react";
import Image from "next/image";
import { CartItemHook } from "src/hooks/cart/contents/cartItemHook";

interface CartItemComponentProps {
  menu: string;
  unitPrice: number;
  onPriceChange: (price: number) => void;
  removedItem: (data: string) => void;
}

/**
 * @yuxincxoi 24.07.25
 * * 장바구니에 들어가는 개별 메뉴 컴포넌트
 * @param {string} menu 메뉴명
 * @param {number} unitPrice 가격
 * @param {function} onPriceChange 총액을 업데이트해주는 함수
 * @param {function} removedItem 삭제될 제품 데이터를 전달해주는 콜백함수
 * @returns { JSX.Element }
 */

const CartItemComponent: FC<CartItemComponentProps> = ({
  menu,
  unitPrice,
  onPriceChange,
  removedItem,
}) => {
  const { count, price, incrementCount, decrementCount, error } = CartItemHook(
    unitPrice,
    onPriceChange,
  );

  if (error) return <div>{error}</div>;

  return (
    <div className="px-10 py-3 w-72">
      <div className="flex justify-between text-base">
        <div id="menu">{menu}</div>
        <div id="price">{price}원</div>
      </div>
      <div className="flex justify-between text-gray-500">
        <div className="flex justify-start">
          <Image
            onClick={decrementCount}
            id="minusMenu"
            width={24}
            height={24}
            src="/minus.png"
            alt="minus"
          />
          <div id="count" className="mx-3 font-light text-s">
            {count}
          </div>
          <Image
            onClick={incrementCount}
            id="plusMenu"
            width={24}
            height={24}
            src="/plus.png"
            alt="plus"
          />
        </div>
        <div
          onClick={() => removedItem(menu)}
          className="hover:text-black cursor-pointer"
        >
          X
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
