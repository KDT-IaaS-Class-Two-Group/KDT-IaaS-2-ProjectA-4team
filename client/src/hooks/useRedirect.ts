import { useRouter } from "next/router";
import { useState } from "react";
import getUserRoleFetch from "src/model/getUserRoleFetch";

const useRedirect = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const redirect = async () => {
    try {
      const userRole = await getUserRoleFetch();
      console.log('User role:', userRole); // 디버깅용 로그

      if (userRole === 1) {
        console.log('Redirecting to /admin'); // 디버깅용 로그
        router.push('/admin/salesInquiry');
      } else if (userRole === 0) {
        console.log('Redirecting to /userPage'); // 디버깅용 로그
        router.push('/userPage');
      } else {
        console.error('Invalid user role');
        setError('잘못된 사용자 역할입니다.');
      }
    } catch (err) {
      console.error('Error fetching user role:', err);
      setError('사용자 역할 정보를 가져오는 데 실패했습니다.');
    }
  };

  return { redirect, error };
};

export default useRedirect;