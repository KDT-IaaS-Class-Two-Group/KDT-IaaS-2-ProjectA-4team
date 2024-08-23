import { useEffect, useState } from "react";
import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import thrower from "src/modules/throw/thrower";
import { failFetchedUserInfoMessage } from "static/hooks/footer/info/useFooterInfoHook.static";

/**
 * `useFooterInfoHook` 훅은 사용자 정보를 가져와서 상태를 관리합니다.
 *
 * 이 훅은 사용자 정보를 서버에서 비동기로 가져오고, 사용자 이름을 상태로 관리합니다.
 * 데이터 로딩 상태와 함께 사용자 이름을 반환하여, 컴포넌트에서 사용자 정보를 비동기적으로 표시할 수 있습니다.
 *
 * @hook
 * @crystal23733
 * @date 24.08.09
 *
 * @returns {{
 *   userName: string | null,  // 사용자 이름 (정보를 성공적으로 가져온 경우) 또는 null (가져오는 도중 오류가 발생한 경우)
 *   loading: boolean          // 데이터 로딩 상태 (true: 로딩 중, false: 로딩 완료)
 * }}
 */
const useFooterInfoHook = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const EP_USER_INFO = process.env.NEXT_PUBLIC_EP_U_INFO as string;
      try {
        const response = await fetcher(
          serverUrlGenerator(EP_USER_INFO),
          "get",
          { credentials: "include" },
        );
        const result = await response.json();
        if (response.ok) {
          setUserName(result.email);
        } else {
          thrower(`${failFetchedUserInfoMessage}: ${result.message}`); // 에러 메시지 로그
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
