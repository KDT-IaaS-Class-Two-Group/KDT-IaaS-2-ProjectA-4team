// components/FooterLinks.tsx
import React from "react";
import { useRouter } from "next/router";
import useFooterInfoHook from "src/hooks/footer/info/useFooterInfoHook";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import fetcher from "src/modules/fetching/fetcher";
import FooterLinksProps from "src/interfaces/components/footer/FooterComponent.interface";

/**
 * @moonhr 24.08.09
 * * 서버에 로그아웃 요청을 보내고, 로그아웃 후 사용자를 리다이렉트합니다.
 *
 * @returns {Promise<void>}
 * @throws {Error} 로그아웃 요청 중 발생한 에러를 던집니다.
 */
async function logout(): Promise<void> {
  try {
    const LOGOUT = process.env.NEXT_PUBLIC_LOGOUT as string;
    // 서버에 로그아웃 요청 보내기
    await fetcher(serverUrlGenerator(LOGOUT), "post", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    // 로그아웃 후 리다이렉트
    window.location.href = process.env.NEXT_PUBLIC_BASE_URL as string;
  } catch (error) {
    throw error;
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
