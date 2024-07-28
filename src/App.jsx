import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Router from "./router/Router.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
