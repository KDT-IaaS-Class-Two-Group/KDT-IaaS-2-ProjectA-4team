import React, { FC, useState } from "react";

interface CartItemComponentProps {
  menu: string;
  unitPrice: number;
  onPriceChange: (price: number) => void;
  eventHandle: (data: string) => void;
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
  eventHandle,
}) => {
  const initialCount = 1;
  const [count, setCount] = useState(initialCount);
  const [price, setPrice] = useState(unitPrice);

  const updatePrice = (newCount: number) => {
    const newPrice = newCount * unitPrice;
    setPrice(newPrice);
    onPriceChange(newPrice - price); // 변경된 금액만큼 차액을 부모에게 전달
  };

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    updatePrice(newCount); // 상태를 업데이트하고 새로운 가격을 설정
  };

  const decrementCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updatePrice(newCount); // 상태를 업데이트하고 새로운 가격을 설정
    }
  };

  const handleRemoveItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentElement = event.currentTarget;
    const parentElement = currentElement.parentElement;
    const grandparentElement = parentElement.parentElement;
    const grandparentFirstChild = grandparentElement?.firstChild;
    const grandparentFirstfirstChild = grandparentFirstChild?.firstChild;

    eventHandle(grandparentFirstfirstChild?.textContent);
  };

  return (
    <div className="px-10 py-3 w-72">
      <div className="flex justify-between text-base">
        <div id="menu">{menu}</div>
        <div id="price">{price}원</div>
      </div>
      <div className="flex justify-between text-gray-500">
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
        <div
          onClick={handleRemoveItem}
          className="hover:text-black cursor-pointer"
        >
          X
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
