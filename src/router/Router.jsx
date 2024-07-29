import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/404";
import SignupPage from "../pages/SignupPage";
import DashboardPage from "../pages/DashboardPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
