import React from "react";
import { Button } from "components/ui/button";
import { useNavigate } from "react-router-dom";
import { IButton } from "src/types/IButton.type";

const CustomButton: React.FC<
  IButton & { type?: "button" | "submit" | "reset" }
> = ({ text, variant, size, to, type = "button" }) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 회원가입, 로그인 등 submit과 페이지 이동이 둘 다 필요한 경우.
    if (type === "submit" && to) {
      event.preventDefault();
      navigate(to);
      // 페이지 이동만 요구할 경우.
    } else if (to) {
      event.preventDefault();
      navigate(to);
    }
  };

  return (
    <Button onClick={handleClick} variant={variant} size={size} type={type}>
      {text}
    </Button>
  );
};

export default CustomButton;
