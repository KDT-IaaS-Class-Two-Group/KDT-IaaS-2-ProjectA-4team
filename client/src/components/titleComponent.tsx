//타이틀 컨포넌트 파일
import React from "react";

interface h1 {
  titletext: string
}

const TitleComponent:React.FC<h1> = ({titletext}) => {
  return (
    <h1>{titletext}</h1>
  )
}

export default TitleComponent;