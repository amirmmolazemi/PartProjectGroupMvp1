import {
  Box,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

function DashboardSidebar({ onClose }) {
  return (
    <Box
      sx={{
        bgcolor: "#FFF",
        color: "#1976d2",
        width: "97%",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        top: "2.5vh",
        right: "1vw",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "10px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          width: "100%",
        }}
      >
        <Avatar
          src="/path/to/avatar.jpg"
          sx={{ width: 50, height: 50, mb: 2 }}
        />
        <List sx={{ width: "100%" }}>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="داشبورد" />
          </ListItem>
          <ListItem button component={Link} to="/tickets">
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="تیکت ها" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemIcon>
              <SettingsIcon color="#1976d2" />
            </ListItemIcon>
            <ListItemText primary="تنظیمات" />
          </ListItem>
        </List>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <List sx={{ width: "100%" }}>
          <ListItem button component={Link} to="/logout">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="خروج" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default DashboardSidebar;
