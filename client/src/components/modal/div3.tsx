import Div from "./div";
import React from "react";

const b:string[] = ["1번","2번","3번"]

const Divin3div:React.FC = () => {
  return(
    <div>
      <Div text = {b[0]}/>
      <Div text = {b[1]}/>
      <Div text = {b[2]}/>
    </div>
  )
}


export default Divin3div; 