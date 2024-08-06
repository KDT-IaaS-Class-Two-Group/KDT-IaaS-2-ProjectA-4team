import React, { forwardRef } from "react";
import { Input, InputProps } from "../../components/ui/input";

/**
 * @param props input 태그가 가질 수 있는 속성들
 * @param ref input 요소에 대한 참조
 */
const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <div>
        <Input ref={ref} {...props} />
      </div>
    );
  },
);

// displayName을 명시적으로 설정
InputComponent.displayName = "InputComponent";

export default InputComponent;
