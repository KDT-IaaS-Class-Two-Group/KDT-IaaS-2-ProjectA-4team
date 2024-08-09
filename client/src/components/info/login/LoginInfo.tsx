import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import LoginInfoComponentProps from "src/interfaces/components/info/login/LoginInfo.interface";
import { failedGetUserInfoMessage } from "static/components/info/login/loginInfo.static";

/**
 * @moonhr 24.08.08
 * *`LoginInfoComponent`는 로그인한 사용자의 정보를 표시하는 컴포넌트입니다.
 * *서버에서 사용자 이름을 가져오고, 이를 화면에 표시합니다. 사용자 이름을 가져오는 동안에는 "로딩 중..."이라는 메시지를 표시하고,
 * *오류가 발생할 경우 오류 메시지를 표시합니다.
 *
 * @component
 *
 * @param {LoginInfoComponentProps} props - `LoginInfoComponent`에 전달되는 속성입니다.
 * @param {string} [props.className] - 컴포넌트에 추가할 CSS 클래스입니다.
 *
 * @returns {JSX.Element} - 로그인 정보를 포함하는 JSX 요소를 반환합니다.
 */
const LoginInfoComponent: FC<LoginInfoComponentProps> = ({ className }) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserName = async () => {
      const EP_LOGININFO = process.env.NEXT_PUBLIC_EP_LOGININFO as string;
      try {
        const response = await fetcher(
          serverUrlGenerator(EP_LOGININFO),
          "get",
          {
            credentials: "include",
          },
        );

        const data = await response.json();
        setUserName(data);
      } catch (error) {
        setError(failedGetUserInfoMessage);
      }
    };

    fetchUserName();
  }, []);

  if (error) {
    return <div className={className}>{error}</div>;
  }

  return (
    <div className={`flex ${className}`}>
      <Image
        id="userIcon"
        width={40}
        height={40}
        src="/userIcon.png"
        alt="userIcon"
      />
      <div className="ml-3 text-sm font-light">
        <div>안녕하세요 !</div>
        <div>{userName ? `${userName} 님` : "로딩 중..."}</div>
      </div>
    </div>
  );
};

export default LoginInfoComponent;
