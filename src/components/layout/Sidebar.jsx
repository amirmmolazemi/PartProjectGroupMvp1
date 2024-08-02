import {
  Box,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import menuOptions from "../../constant/menuOptions";
import logOut from "../../utils/logOutHandler";

function Sidebar({ onClose }) {
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
        borderRadius: "12px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
        padding: "20px 0",
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
          {menuOptions.map((item) => (
            <ListItem
              button
              component={Link}
              to={item.to}
              onClick={onClose}
              key={item.id}
              sx={{ borderRadius: 2 }}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
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
          <ListItem
            button
            component={Link}
            to="/login"
            onClick={logOut}
            sx={{ borderRadius: 2 }}
          >
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

export default Sidebar;
