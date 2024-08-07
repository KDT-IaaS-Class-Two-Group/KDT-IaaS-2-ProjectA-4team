// components/FooterLinks.tsx
import React from "react";
import { useRouter } from "next/router";
import useFooterInfoHook from "src/hooks/useFooterInfoHook";

interface FooterLinksProps {
  className?: string;
}

/**
 * @crystal23733 24.07.29
 * @returns {JSXElement} - 네비게이션 바 footer컴포넌트
 */
const FooterLinks: React.FC<FooterLinksProps> = ({ className }) => {
  const router = useRouter();
  const { userName, loading } = useFooterInfoHook();
  console.log(userName);
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  if (loading) {
    return <p>Loading...</p>; // 로딩 중 표시
  }

  return (
    <div
      className={`text-gray-500 underline text-sm leading-loose ${className}`}
    >
      <p
        onClick={() => handleNavigation(`/myPage/${userName}`)}
        className="cursor-pointer hover:text-black"
      >
        마이페이지
      </p>
      <p
        onClick={() => handleNavigation("/logout")}
        className="cursor-pointer hover:text-black"
      >
        로그아웃
      </p>
    </div>
  );
};

export default FooterLinks;
