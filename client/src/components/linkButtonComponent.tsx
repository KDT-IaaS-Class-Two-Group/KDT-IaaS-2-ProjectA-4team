import { Button } from "components/ui/button";
import React, { ReactNode, MouseEventHandler } from "react";
import Link from "next/link";

interface LinkButtonComponentProps {
  children: ReactNode;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

/**
 * @crystal23733
 * @param href link
 * @returns 라우팅 버튼 컴포넌트
 */
const LinkButtonComponent: React.FC<LinkButtonComponentProps> = ({
  children,
  href,
  onClick,
}) => {
  return (
    <div>
      <Link href={href} onClick={onClick}>
        <Button className="p-0">{children}</Button>
      </Link>
    </div>
  );
};

export default LinkButtonComponent;
