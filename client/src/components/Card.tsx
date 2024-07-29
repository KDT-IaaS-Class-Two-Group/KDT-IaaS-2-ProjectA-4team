import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";

interface CardComponentProps {
  title: string;
  content: number;
}

/**
 * @yuxincxoi 24.07.25
 * * 사용자페이지 메뉴에서 사용될 카드 컴포넌트
 * @param { string } title 메뉴명
 * @param { string } content 가격
 * @returns { JSXElement }
 */

const CardComponent: FC<CardComponentProps> = ({ title, content }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{content}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CardComponent;
