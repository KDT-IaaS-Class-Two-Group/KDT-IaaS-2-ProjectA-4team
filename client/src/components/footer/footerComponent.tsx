// components/FooterLinks.tsx
import React from "react";
import { useRouter } from "next/router";
import useFooterInfoHook from "src/hooks/footer/info/useFooterInfoHook";
import url3001Generator from "src/modules/generator/url3001Generator";

interface FooterLinksProps {
  className?: string;
}

async function logout(): Promise<void> {
  try {
    const LOGOUT = process.env.NEXT_PUBLIC_LOGOUT as string;
    // 서버에 로그아웃 요청 보내기
    const response = await fetch(url3001Generator(LOGOUT), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      // 서버에서 오류가 발생한 경우
      throw new Error(`Logout failed with status ${response.status}`);
    }
    // 로그아웃 후 리다이렉트
    window.location.href = "/";
  } catch (error) {
    console.error("Error during logout:", error);
    // 로그아웃 오류에 대한 처리, 예를 들어 사용자에게 알림 표시
  }
}

/**
 * @crystal23733 24.07.29
 * @returns {JSX.Element} - 네비게이션 바 footer컴포넌트
 */
const FooterLinks: React.FC<FooterLinksProps> = ({ className }) => {
  const router = useRouter();
  const { userName, loading } = useFooterInfoHook();
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
      <p onClick={logout} className="cursor-pointer hover:text-black">
        로그아웃
      </p>
    </div>
  );
};

export default FooterLinks;
