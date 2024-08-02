import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastContainerPart() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
    />
  );
}

export default ToastContainerPart;
