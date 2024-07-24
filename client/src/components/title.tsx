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