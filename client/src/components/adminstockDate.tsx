import React, { FC } from "react";
import Div from "./modal/div";
import Divin2div from "./modal/div2";
import Divin3divfrom from "./modal/div3";
import Divin3div from "./modal/div3";



const InputComponent: FC = () => {
  return (
    <div id="root">
      <main>
      <aside id="first-aside">
        <div>
          {/* <Div text="사용자 프로필"/> */} // ? 우선 test로 만들어 본것

          <Divin2div/>
          <div >
            <Div text="매출 관리"/>
            <Div text="매출 조회"/>
            <Div text="매출 순위"/>
          </div>
          <div >
            <Div text="회원 관리"/>
            <Div text="회원 조회"/>
            <Div text="회원 순위"/>
          </div>
        </div>
        <div>하단
          <div>마이페이지</div>// ! 버튼으로 대체
          <div>로그아웃</div>// ! 버튼으로 대체
        </div>
      </aside>
      <section id="first-section">
        <div>
          <div id="LOGO">로고 자리</div>
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
              <Divin3div/>                          // ? text용
              <div >
                <Div text="재고 명"/>
                <Div text="유통기한"/>
                <Div text="유통기한 페기 버튼"/>
              </div>
              <div >
                <Div text="재고 명"/>
                <Div text="유통기한"/>
                <Div text="유통기한 페기 버튼"/>
              </div>
              <div >
                <Div text="재고 명"/>
                <Div text="유통기한"/>
                <Div text="유통기한 페기 버튼"/>
              </div>
              <div >
                <Div text="재고 명"/>
                <Div text="유통기한"/>
                <Div text="유통기한 페기 버튼"/>
              </div>
              <div >
                <Div text="재고 명"/>
                <Div text="유통기한"/>
                <Div text="유통기한 페기 버튼"/>
              </div>
              <div >
                <Div text="재고 명"/>
                <Div text="유통기한"/>
                <Div text="유통기한 페기 버튼"/>
              </div>
              <div >
                <Div text="재고 명"/>
                <Div text="유통기한"/>
                <Div text="유통기한 페기 버튼"/>
              </div>
              <div >
                <Div text="재고 명"/>
                <Div text="유통기한"/>
                <Div text="유통기한 페기 버튼"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default InputComponent;
