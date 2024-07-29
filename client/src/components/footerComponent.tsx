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
    <div className={`mt-auto text-sm ${className}`}>
      <p
        onClick={() => handleNavigation('/myPage')}
        className="cursor-pointer hover:underline"
      >
        마이페이지
      </p>
      <p
        onClick={() => handleNavigation('/logout')}
        className="cursor-pointer hover:underline"
      >
        로그아웃
      </p>
    </div>
  );
};

export default FooterLinks;