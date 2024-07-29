import { useEffect } from "react";
import toastMaker from "../utils/toastMaker";
import api from "../configs/api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useCheckCookie = () => {
  const navigate = useNavigate();
  const cookie = document.cookie.split("; ")[0];
  const tokenName = cookie.split("=")[0];
  const token = cookie.split("=")[1];
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    const validateToken = async () => {
      try {
        const { status } = await api.post("/verify-token", { token });
        status == 200 && toastMaker("success", "User logged in successfully");
      } catch ({ response }) {
        response.status == 401 && Cookies.remove(tokenName);
        navigate("/login");
      }
    };

    validateToken();
  }, []);
};

export default useCheckCookie;
