import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";

const menuOptions = [
  {
    id: "dashboard",
    to: "/dashboard",
    text: "داشبورد",
    icon: DashboardIcon,
  },
  {
    id: "tickets",
    to: "/tickets",
    text: "تیکت ها",
    icon: AssignmentIcon,
  },
  {
    id: "settings",
    to: "/settings",
    text: "تنظیمات",
    icon: SettingsIcon,
  },
];

export default menuOptions;
