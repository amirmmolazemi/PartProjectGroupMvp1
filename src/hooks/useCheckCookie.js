import { useEffect } from "react";
import toastMaker from "../utils/toastMaker";
import api from "../configs/api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useCheckCookie = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
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
        response.status == 401 && Cookies.remove("token");
        navigate("/login");
      }
    };

    validateToken();
  }, []);
};

export default useCheckCookie;
