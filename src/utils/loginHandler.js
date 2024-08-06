import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import api from "configs/api";
import toastMaker from "utils/toastMaker";

const loginHandler = (username, password) => {
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toastMaker("error", "لطفاً نام کاربری و رمز عبور را وارد کنید");
      return;
    }
    try {
      const response = await api.post("/auth/login", {
        username,
        password,
      });
      const { token } = response.data.data;
      if (token) {
        Cookies.set("token", token, {
          sameSite: "Strict",
          expires: 1,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.data?.error || "خطای ناشناخته رخ داده است";
      toastMaker("error", errorMessage);
    }
  };

  return { login };
};

export default loginHandler;
