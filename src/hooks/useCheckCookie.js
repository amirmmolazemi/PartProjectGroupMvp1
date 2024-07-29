import { useEffect } from "react";
import toastMaker from "../utils/toastMaker";
import api from "../configs/api";
import { useNavigate } from "react-router-dom";

const useCheckCookie = () => {
  const navigate = useNavigate();

  const token = document.cookie.split("; ")[0].split("=")[1];
  useEffect(() => {
    if (!token) {
    }
    const validateToken = async () => {
      try {
        const { status } = await api.post("/api/v1/auth/validate", { token });
        if (status === 200) {
          toastMaker("success", "User logged in successfully");
        } else {
          navigate("/login");
        }
      } catch (error) {
        navigate("/login");
      }
    };

    validateToken();
  }, [token]);
};

export default useCheckCookie;
