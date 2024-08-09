import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import LoginInfoComponentProps from "src/interfaces/components/info/login/LoginInfo.interface";
import { failedGetUserInfoMessage } from "static/components/info/login/loginInfo.static";

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
