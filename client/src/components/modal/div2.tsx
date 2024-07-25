import Div from "./div";
import React from "react";

const a:string[] = ["1번","2번"]

const Divin2div:React.FC = () => {
  return(
    <div>
      <Div text = {a[0]}/>
      <Div text = {a[1]}/>
    </div>
  )
}

export default Divin2div; 