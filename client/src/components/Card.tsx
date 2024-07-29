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
      <Card className="w-[350px] h-56 rounded-xl">
        <div className="bg-slate-500 w-52 h-36"></div>
        <CardHeader>
          <CardTitle className="text-center text-xl">{title}</CardTitle>
          <CardDescription className="text-center text-sm">
            {content}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CardComponent;
