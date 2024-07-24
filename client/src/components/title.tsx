//타이틀 컨포넌트 파일
import React from "react";

interface Divh1 {
  titletext: string
}

const Title:React.FC<Divh1> = ({titletext}) => {
  return (
    <div><h1>{titletext}</h1></div>
  )
}