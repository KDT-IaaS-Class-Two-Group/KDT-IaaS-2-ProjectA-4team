import React from "react";
import { Button } from "components/ui/button";
import { useRouter } from "next/router";
import { IButton } from "src/types/IButton.type";

const CustomButton: React.FC<IButton> = ({ to, text, variant, size }) => {
  const router = useRouter();

  const handleClick = () => {
    console.log(to);
    router.push(to);
  };

  return (
    <Button onClick={handleClick} variant={variant} size={size}>
      {text}
    </Button>
  );
};

export default CustomButton;
