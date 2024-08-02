import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import toastMaker from "../utils/toastMaker";
import useCheckCookie from "./useCheckCookie";

const useDecodeToken = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // useCheckCookie();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        const decoded = jwtDecode(token);
        setData(decoded);
      } catch (error) {
        toastMaker("error", "Error decoding token:");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useDecodeToken;
