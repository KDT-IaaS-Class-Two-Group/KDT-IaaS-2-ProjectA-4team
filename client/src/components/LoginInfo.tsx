import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface LoginInfoComponentProps {
  email: string;
  className?: string;
}

/**
 * @yuxincxoi 24.07.25
 * * 사이드바의 로그인 정보를 나타내는 컴포넌트
 * * "안녕하세요 ! [이메일]님"
 * @param {string} email 로그인한 이메일 데이터
 * @param {string} className 컴포넌트 스타일
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
      <Image
        id="userIcon"
        width={40}
        height={40}
        src="/userIcon.png"
        alt="userIcon"
      />
      <div className="font-light text-sm ml-3">
        <div>안녕하세요 !</div>
        <div>{localEmail} 님</div>
      </div>
    </div>
  );
};

export default LoginInfoComponent;
