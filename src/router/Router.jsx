import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/404";
import SignupPage from "../pages/SignupPage";
import DashboardPage from "../pages/DashboardPage";
import TicketsPage from "../pages/Tickets";
import SettingPage from "../pages/SettingPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/tickets" element={<TicketsPage />} />
      <Route path="/settings" element={<SettingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
