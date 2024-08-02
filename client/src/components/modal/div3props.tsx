import React from "react";

interface Div3propstext {
  text3: string[];
}

const Div3props: React.FC<Div3propstext> = ({ text3 }) => {
  return (
    <div>
      <div>{text3[1]}</div>
      <div>{text3[2]}</div>
      <div>{text3[3]}</div>
    </div>
  );
};

export default Div3props;
