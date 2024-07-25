//제품명 유통기한 제품 페기
//사이드 바 - 선택 메뉴 ex) 재고관리 ,재고 조회 ,유통기한 페이지이동
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
