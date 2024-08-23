import React from "react";
import h1 from "src/interfaces/components/title/TitleComponent.interface";

/** @jojayeon 24.07.24
 *  타이틀 h1태그
 * @component
 * @param {string} props.titletext - 원하는 text 넣어서 사용
 * @param {string} [props.className] - className="" 원하는 스타일 적용
 * @returns {React.ReactElement} h1 태그로 구성된 타이틀 컴포넌트를 반환합니다.
 */

const TitleComponent: React.FC<h1> = ({ titletext, className }) => {
  return (
    <h1 className={`text-3xl font-bold w-50 h-10 mt-3 ${className}`}>
      {titletext}
    </h1>
  );
};

export default TitleComponent;
