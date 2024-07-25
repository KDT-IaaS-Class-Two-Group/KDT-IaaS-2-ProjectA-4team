import { Button } from "components/ui/button";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface LinkButtonComponentProps {
  children: ReactNode;
  href: string;
}

const LinkButtonComponent: React.FC<LinkButtonComponentProps> = ({
  href,
  children,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };
  return <Button onClick={handleClick}>{children}</Button>;
};

export default LinkButtonComponent;
