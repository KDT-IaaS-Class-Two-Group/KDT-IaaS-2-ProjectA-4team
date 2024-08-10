import React, { FC } from "react";
import { Card, CardTitle, CardDescription } from "../../../components/ui/card";
import Image from "next/image";
import CardComponentProps from "src/interfaces/components/card/Card.interface";

/**
 * @yuxincxoi 24.07.25
 * * 사용자페이지 메뉴에서 사용될 카드 컴포넌트
 * @param { string } title 메뉴명
 * @param { string } content 가격
 * @param { function } onAddToCart 카드의 데이터를 전달해주는 콜백함수
 * @returns { JSXElement }
 */

const CardComponent: FC<CardComponentProps> = ({
  title,
  content,
  onAddToCart,
}) => {
  return (
    <div onClick={() => onAddToCart(title, content)}>
      <Card className="h-56 rounded-xl hover:cursor-pointer">
        <Image
          id="burgerImage"
          width={200}
          height={150}
          className="mx-auto mt-2"
          src="/burger.jpeg"
          alt="burgerImage"
        />
        <div className="my-2">
          <CardTitle className="text-center text-xl">{title}</CardTitle>
          <CardDescription className="text-center text-sm">
            {content}
          </CardDescription>
        </div>
      </Card>
    </div>
  );
};

export default CardComponent;
