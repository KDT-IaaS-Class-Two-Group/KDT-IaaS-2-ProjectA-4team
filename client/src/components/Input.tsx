import React, { FC } from "react";
import { Input, InputProps } from "../../components/ui/input";

/**
 * @yuxincxoi 24.07.24
 * * shadcn ui로 기본적으로 제공된 input
 * @param { string } props input 태그가 가질 수 있는 속성들
 * * 예) type="button", className="bg-black" ...
 */
const InputComponent: FC<InputProps> = ({ ...props }) => {
  return (
    <div>
      <Input {...props} />
    </div>
  );
};

export default InputComponent;
