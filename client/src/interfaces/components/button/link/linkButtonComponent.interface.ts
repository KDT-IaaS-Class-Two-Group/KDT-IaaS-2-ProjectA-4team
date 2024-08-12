import { ReactNode } from "react";
import { MouseEventHandler } from "react";

export default interface LinkButtonComponentProps {
  children: ReactNode;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}
