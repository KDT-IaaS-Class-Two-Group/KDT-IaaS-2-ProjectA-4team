import React from "react";
import { Button } from "components/ui/button";
import { useNavigate } from "react-router-dom";
import { CustomButtonProps } from "src/types/Tbutton.type";

const CustomButton: React.FC<CustomButtonProps> = ({
  to,
  text,
  variant,
  size,
}) => {
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
