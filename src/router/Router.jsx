import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/404";
import DashboardPage from "../pages/DashboardPage";
import TicketsPage from "../pages/TicketsPage";
import SettingPage from "../pages/SettingPage";
import Layout from "../layout/Layout";
import AddTicket from "../pages/AddTicket";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <Layout>
            <DashboardPage />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <DashboardPage />
          </Layout>
        }
      />
      <Route
        path="/tickets"
        element={
          <Layout>
            <TicketsPage />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout>
            <SettingPage />
          </Layout>
        }
      />
      <Route path="/add" element={<AddTicket />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
