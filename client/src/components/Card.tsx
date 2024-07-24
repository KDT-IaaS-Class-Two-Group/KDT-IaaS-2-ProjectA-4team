import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";

interface CardComponentProps {
  imgUrl: string;
  title: string;
  content: string;
}

const CardComponent: FC<CardComponentProps> = ({ imgUrl, title, content }) => {
  return (
    <div>
      <Card>
        <CardContent>{imgUrl}</CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{content}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CardComponent;
