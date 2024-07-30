import React, { FC } from "react";
import Div3props from "./modal/div3props";

import sidebarmenutext1 from "./modal/text/sidebarmenu1";
import sidebarmenutext2 from "./modal/text/sidebarmenu2";
import sidebarmenutext3 from "./modal/text/sidebarmenu3";
import mainprduchlist from "./modal/text/mianproductlist";
const InputComponent: FC = () => {
  return (
    <div id="root">
      <main>
{/* --------------사이바 컴포넌트 사용---------------*/}
        <aside id="first-aside">
          <div>
            <div>사용자 프로필</div>// 가져다 쓰기
            <Div3props text3={sidebarmenutext1} />
            <Div3props text3={sidebarmenutext2} />
            <Div3props text3={sidebarmenutext3} />
          </div>
          <div>
            하단
            <div>마이페이지</div>
            <div>로그아웃</div>
          </div>
        </aside>
{/* ------------------------------------------------ */}

        <section id="first-section">
{/* ----------- 로고 컴포넌트 사용------------*/}
          <div>
            <div id="LOGO">로고 자리</div>
          </div>
{/* ------------------------------------------------ */}
          <div id="content-box">
            <div id="content">
              <div id="content-header">
{/* -----------타이틀 컴포넌트 사용------------*/}
                <h1>콘텐츠 헤더</h1>
{/* ------------------------------------------------ */}
                {/* <form action=""> //! 샤드 폼 추가
                  <input type="text" placeholder="이름을 입력해주세요" />
                  <input type="submit" value="검색" />
                </form> */}
              </div>
                //?  여기는 db 추가할 수 있게 동적으로 계속마들어져 야하지 않을까 생각
              <div id="content-description">
                <Div3props text3={mainprduchlist} />
                <Div3props text3={mainprduchlist} />
                <Div3props text3={mainprduchlist} />
                <Div3props text3={mainprduchlist} />
                <Div3props text3={mainprduchlist} />
                <Div3props text3={mainprduchlist} />
                <Div3props text3={mainprduchlist} />
              </div>
            
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InputComponent;
