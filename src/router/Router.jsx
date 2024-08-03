import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/404";
import DashboardPage from "../pages/DashboardPage";
import TicketsPage from "../pages/TicketsPage";
import SettingPage from "../pages/SettingPage";
import Layout from "../layout/Layout";
import AddTicketForm from "../pages/AddTicketFormPage";
import TicketChat from "../pages/TicketChat";

const routesWithLayout = [
  { path: "/", element: <DashboardPage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/tickets", element: <TicketsPage /> },
  { path: "/settings", element: <SettingPage /> },
];

const Router = ({ setDarkMode, darkMode }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {routesWithLayout.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout setDarkMode={setDarkMode} darkMode={darkMode}>
              {element}
            </Layout>
          }
        />
      ))}
      <Route path="/add" element={<AddTicketForm />} />
      <Route path="/chat" element={<TicketChat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
