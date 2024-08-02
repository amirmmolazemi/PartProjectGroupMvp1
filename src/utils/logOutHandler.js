import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toastMaker from "../utils/toastMaker";

const logOut = () => {
  const navigate = useNavigate();
  try {
    Cookies.remove("token");
    navigate("/login");
  } catch (error) {
    toastMaker("error", "خروج با شکست همراه شد");
  }
};

export default logOut;
