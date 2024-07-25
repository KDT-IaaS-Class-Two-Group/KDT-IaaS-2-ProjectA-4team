import React from "react";
import { Button } from "components/ui/button";
import { TButton } from "../types/Tbutton.type";

/**
 * @moonhr 24.07.25
 * @param { string } text 버튼 내용
 * @param { 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' } variant 버튼 스타일
 * @param { 'default' | 'sm' | 'lg' | 'icon' } size 버튼 사이즈
 * @returns {JSX.Element} 버튼 컴포넌트
 */
const CustomButton: React.FC<TButton> = ({ text, variant, size }) => {
  return (
    <Button variant={variant} size={size}>
      {text}
    </Button>
  );
};

export default CustomButton;
