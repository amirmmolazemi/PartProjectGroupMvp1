import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import toastMaker from "../utils/toastMaker";
import Cookies from "js-cookie";
import useCheckCookie from "./useCheckCookie";

const useDecodeToken = () => {
  const [decodedToken, setDecodedToken] = useState(null);
  const [loading, setLoading] = useState(true);
  useCheckCookie();

  useEffect(() => {
    const decodeToken = () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setDecodedToken(decoded);
        } catch (error) {
          toastMaker("error", "دریافت اطلاعات با شکست همراه شد");
          setDecodedToken(null);
        }
      }
      setLoading(false);
    };
    decodeToken();
  }, []);

  const { userEmail, userName } = decodedToken || {};
  return { userEmail, userName, loading };
};

export default useDecodeToken;
