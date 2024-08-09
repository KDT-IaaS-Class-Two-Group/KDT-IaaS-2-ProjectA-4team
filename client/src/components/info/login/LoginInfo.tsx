import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import url3001Generator from "src/modules/generator/url3001Generator";

interface LoginInfoComponentProps {
  className?: string;
}

const LoginInfoComponent: FC<LoginInfoComponentProps> = ({ className }) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserName = async () => {
      const EP_LOGININFO = process.env.NEXT_PUBLIC_EP_LOGININFO as string;
      try {
        const response = await fetch(url3001Generator(EP_LOGININFO), {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        setUserName(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setError("사용자 정보를 불러오는데 실패했습니다.");
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
