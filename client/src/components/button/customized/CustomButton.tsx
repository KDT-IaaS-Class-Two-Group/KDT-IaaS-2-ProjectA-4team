import React, { FC } from "react";
import { Button, ButtonProps } from "components/ui/button";

/**
 * @moonhr 24.07.25
 * * shadcn ui로 기본적으로 제공된 button
 * @param { string } props button 태그가 가질 수 있는 속성들
 * * 예) type="button", className="bg-black" ...
 */
const ButtonComponent: FC<ButtonProps> = ({ ...props }) => {
  return (
    <div>
      <Button {...props} />
    </div>
  );
};

export default ButtonComponent;
