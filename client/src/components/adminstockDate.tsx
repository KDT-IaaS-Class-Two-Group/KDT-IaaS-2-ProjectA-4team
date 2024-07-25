import React, { FC } from "react";
import Div from "./modal/divprops";
import Div3props from "./modal/div3props";

import sidebarmenutext1 from "./modal/text/sidebarmenu1";
import sidebarmenutext2 from "./modal/text/sidebarmenu2";
import sidebarmenutext3 from "./modal/text/sidebarmenu3";
import mainprduchlist from "./modal/text/mianprductlist";
const InputComponent: FC = () => {
  return (
    <div id="root">
      <main>
      <aside id="first-aside">
        <div>
          <div>사용자 프로필</div>// 가져다 쓰기 
          <Div3props text3={sidebarmenutext1}/>
          <Div3props text3={sidebarmenutext2}/>
          <Div3props text3={sidebarmenutext3}/>         
        </div>
        <div>하단
          <div>마이페이지</div>// ! 버튼으로 대체
          <div>로그아웃</div>// ! 버튼으로 대체
        </div>
      </aside>
      <section id="first-section">
        <div>
          <div id="LOGO">로고 자리</div>// 이것도 가져다 쓰기 
        </div>
        <div id="content-box">
          <div id="content">
            <div id="content-header">                        // * 여기에 제목 검색창 검색버튼 
              <h1>콘텐츠 헤더</h1>                            // * 아마 유통 관리 라는 말이 들어갈듯 타이틀 가져다 쓰면될 듯 
              <form action="">                               // ! 이거 샤드에 있는지 찾아보기 // 있다 샤드에 버튼이랑 폼으로 해서 만들기
                <input type="text" placeholder="이름을 입력해주세요"/>
                <input type="submit" value="검색"/>
              </form>
            </div>
            <div id="content-description">
              <Div3props text3 = {mainprduchlist}/>
              <Div3props text3 = {mainprduchlist}/>
              <Div3props text3 = {mainprduchlist}/>
              <Div3props text3 = {mainprduchlist}/>
              <Div3props text3 = {mainprduchlist}/>
              <Div3props text3 = {mainprduchlist}/>
              <Div3props text3 = {mainprduchlist}/>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default InputComponent;
