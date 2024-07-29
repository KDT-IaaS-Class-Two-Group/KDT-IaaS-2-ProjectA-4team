import { Button } from "components/ui/button";
import React, { ReactNode } from "react";
import Link from "next/link";

interface LinkButtonComponentProps {
  children: ReactNode;
  href: string;
}

/**
 * @crystal23733
 * @param href link
 * @returns 라우팅 버튼 컴포넌트
 */
const LinkButtonComponent: React.FC<LinkButtonComponentProps> = ({
  children,
  href,
}) => {
  return (
    <div>
      <Link href={href}>
        <Button>{children}</Button>
      </Link>
    </div>
  );
};

export default LinkButtonComponent;
