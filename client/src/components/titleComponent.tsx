/** @jojayeon 24.07.24
 *  타이틀 h1태그
 */
import React from "react";

interface h1 {
  titletext: string
}

const TitleComponent:React.FC<h1> = ({titletext}) => {
  return (
    <h1 className=" text-center text-xl font-bold w-50 h-10 mt-3">{titletext}</h1>
  )
}

export default TitleComponent;