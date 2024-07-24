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

const CardComponent: FC<CardComponentProps> = () => {
  return <div></div>;
};

export default CardComponent;
