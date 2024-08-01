import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router.jsx";
import ToastContainerPart from "./utils/ToastContainerPart.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
        <ToastContainerPart />
      </BrowserRouter>
    </>
  );
}

export default App;
