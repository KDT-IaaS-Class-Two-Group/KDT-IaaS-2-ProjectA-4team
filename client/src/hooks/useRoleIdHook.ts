import { useEffect, useState } from "react";
import getUserRoleFetch from "src/model/getUserRoleFetch";

const useRoleIdHook = () => {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const userRole = await getUserRoleFetch();
        if (userRole === "1") {
          setRole("admin");
        } else if (userRole === "0") {
          setRole("user");
        } else {
          setRole(null); // * 얘기치 않은 에러
        }
      } catch (error) {
        console.error("사용자 역할 정보 로드 실패", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserRole();
  }, []);
  return { role, loading };
};

export default useRoleIdHook;
