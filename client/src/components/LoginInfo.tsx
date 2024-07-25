import React, { FC } from "react";

interface LoginInfoComponentProps {
  email: string;
}

/**
 * @yuxincxoi 24.07.25
 * * 사이드바의 로그인 정보를 나타내는 컴포넌트
 * * "안녕하세요 ! [이메일]님"
 * @param {string} email 로그인한 이메일 데이터
 * @returns { JSXElement }
 */

const LoginInfoComponent: FC<LoginInfoComponentProps> = ({ email }) => {
  return (
    <div>
      <div id="userIcon" className="w-38 h-38 bg-slate-600"></div>
      <div>
        <div>안녕하세요 !</div>
        <div>{email} 님</div>
      </div>
    </div>
  );
};

export default LoginInfoComponent;
