// components/FooterLinks.tsx
import React from "react";
import { useRouter } from "next/router";

interface FooterLinksProps {
  className?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ className }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div
      className={`text-gray-500 underline mt-auto text-sm leading-loose ${className}`}
    >
      <p
        onClick={() => handleNavigation("/myPage")}
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
