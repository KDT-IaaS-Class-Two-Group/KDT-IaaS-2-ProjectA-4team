import { useEffect, useState } from "react";

interface CustomJwtPayload {
  name: string;
}

const useFooterInfoHook = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfoUrl = process.env.NEXT_PUBLIC_USER_INFO as string;
      try {
        const response = await fetch(userInfoUrl, {
          method: "GET",
          credentials: "include",
        });
        const result = await response.json();
        if (response.ok) {
          setUserName(result.email); // 이메일로 사용자 이름 설정
        } else {
          console.error("Error fetching user info:", result.message); // 에러 메시지 로그
          setUserName(null);
        }
      } catch (error) {
        setUserName(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, []);
  return { userName, loading };
};

export default useFooterInfoHook;
