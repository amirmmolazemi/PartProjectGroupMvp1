import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../configs/api";
import toastMaker from "../utils/toastMaker";

const useLogin = (username, password) => {
  const navigate = useNavigate();
  const signInHandler = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toastMaker("error", "Please enter both username and password");
      return;
    }
    try {
      const {
        data: {
          data: { token },
        },
      } = await api.post("/login", {
        username,
        password,
      });
      if (token) {
        Cookies.set(username, token);
        navigate("/dashboard");
      }
    } catch ({
      response: {
        data: { data },
      },
    }) {
      toastMaker("error", data.error);
    }
  };

  return { signInHandler };
};

export default useLogin;
