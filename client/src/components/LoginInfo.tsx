import React, { FC, useEffect, useState } from "react";

interface LoginInfoComponentProps {
  email: string;
  className?: string;
}

/**
 * @yuxincxoi 24.07.25
 * * 사이드바의 로그인 정보를 나타내는 컴포넌트
 * * "안녕하세요 ! [이메일]님"
 * @param {string} email 로그인한 이메일 데이터
 * @returns { JSXElement }
 */

const LoginInfoComponent: FC<LoginInfoComponentProps> = ({
  email,
  className,
}) => {
  const [localEmail, setLocalEmail] = useState(email);

  useEffect(() => {
    setLocalEmail(email);
  }, [email]);

  return (
    <div className={`flex ${className}`}>
      <div id="userIcon" className="w-12 h-12 bg-slate-600"></div>
      <div className="font-light text-s ml-3">
        <div>안녕하세요 !</div>
        <div>{localEmail} 님</div>
      </div>
    </div>
  );
};

export default LoginInfoComponent;
