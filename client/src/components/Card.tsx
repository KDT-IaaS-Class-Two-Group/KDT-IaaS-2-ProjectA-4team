import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";

interface CardComponentProps {
  title: string;
  content: string;
}

const CardComponent: FC<CardComponentProps> = ({ title, content }) => {
  return (
    <div>
      <Card>
        <CardContent></CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{content}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CardComponent;
