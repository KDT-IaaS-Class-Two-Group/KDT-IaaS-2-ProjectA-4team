import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface CustomJwtPayload {
  name: string;
}

const useFooterInfoHook = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get('token');
    if(token){
      try {
        const decodedToken = jwtDecode<CustomJwtPayload>(token);
        setUserName(decodedToken.name || null);
      } catch(error) {
        console.error("디코딩 실패", error);
      }
    }
  }, []);
  return userName;
}

export default useFooterInfoHook;