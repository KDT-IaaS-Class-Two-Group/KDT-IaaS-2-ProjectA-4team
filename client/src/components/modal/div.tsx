//타이틀 컨포넌트 파일
import React from "react";

interface div {
  text: string
}

const Div:React.FC<div> = ({text}) => {
  return (
    <div>{text}</div>
  )
}

export default Div;