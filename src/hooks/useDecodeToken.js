import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import toastMaker from "../utils/toastMaker";
import Cookies from "js-cookie";
import useCheckCookie from "./useCheckCookie";

const useDecodeToken = async () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    useCheckCookie();
    const token = Cookies.get("token");
    try {
      const decoded = jwtDecode(token);
      setData(decoded);
    } catch (error) {
      toastMaker("error", "Error decoding token:");
      setData(null);
    }
    data ? setLoading(true) : setLoading(false);
  }, []);

  return { data, loading };
};

export default useDecodeToken;
