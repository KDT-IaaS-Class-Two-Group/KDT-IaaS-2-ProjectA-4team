import React from "react";
import { Button } from "components/ui/button";
import { useNavigate } from "react-router-dom";
import { IButton } from "src/types/Ibutton.type";

const CustomButton: React.FC<IButton> = ({ to, text, variant, size }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button onClick={handleClick} variant={variant} size={size}>
      {text}
    </Button>
  );
};

export default CustomButton;
