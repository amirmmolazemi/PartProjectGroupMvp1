import { toast } from "react-toastify";

const toastTypes = {
  success: toast.success,
  error: toast.error,
};

const toastMaker = (type, message) => {
  const showToast = toastTypes[type];
  if (showToast) {
    showToast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } else {
    toastMaker("error", "Invalid toast type");
  }
};

export default toastMaker;
