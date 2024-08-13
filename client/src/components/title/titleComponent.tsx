/** @jojayeon 24.07.24
 *  타이틀 h1태그
 * * titletext text 넣어 줘야함
 */
import React from "react";
import h1 from "src/interfaces/components/title/TitleComponent.interface";

const TitleComponent: React.FC<h1> = ({ className, titletext }) => {
  return (
    <div className={className}>
      <h1 className="h-10 mt-3 text-xl font-bold text-center w-50">
        {titletext}
      </h1>
    </div>
  );
};

export default TitleComponent;
