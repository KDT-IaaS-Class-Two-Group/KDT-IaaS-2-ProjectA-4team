/** @jojayeon 24.07.24
 *  * h1(titleComponenent)를 div에 넣은 형태
 *  * 박스 필요할까 생각되어서 
 */


import React from "react";
import TitleComponent from "./titleComponent";
import test from "./static/TestText";

const Title:React.FC = () => {
  return (
    <div>
      <TitleComponent titletext= {test}/>
    </div>
  )
}
export default Title;