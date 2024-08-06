import { useRouter } from "next/router";
import useRoleIdHook from "./useRoleIdHook";
import { useEffect } from "react";

const useRedirect = () => {
  const router = useRouter();
  const { role, loading } = useRoleIdHook();

  useEffect(() => {
    if (!loading) {
      if (role === "admin") {
        router.push("/admin");
      } else if (role === "user") {
        router.push("/userPage");
      }
    }
  }, [role, loading, router]);
};

export default useRedirect;
