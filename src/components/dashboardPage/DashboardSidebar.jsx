import React from "react";
import {
  Grid,
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

function DashboardSidebar({ username, email }) {
  const isSmallScreen = useMediaQuery("(max-width:1050px)");

  return (
    <Grid
      item
      xs={4}
      sm={2}
      md={2}
      lg={2}
      sx={{
        bgcolor: "#3f51b5",
        color: "white",
        height: "100vh",
        p: 2,
        display: { xs: "none", sm: "block" },
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        mb={4}
      >
        <Avatar
          alt={username}
          src="/path/to/avatar.jpg"
          sx={{ width: 56, height: 56, mb: 2 }}
        />
        <Typography variant="h6" fontWeight={700}>
          {username}
        </Typography>
        <Typography variant="body2" color="white">
          {email}
        </Typography>
      </Box>

      <List sx={{ width: "100%" }}>
        <ListItem
          button
          component={Link}
          to="/dashboard"
          sx={{
            borderRadius: 1,
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
          }}
        >
          <ListItemIcon>
            <DashboardIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/tasks"
          sx={{
            borderRadius: 1,
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
          }}
        >
          <ListItemIcon>
            <AssignmentIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/settings"
          sx={{
            borderRadius: 1,
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
          }}
        >
          <ListItemIcon>
            <SettingsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", my: 2 }} />
        <ListItem
          button
          component={Link}
          to="/logout"
          sx={{
            borderRadius: 1,
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Grid>
  );
}

export default DashboardSidebar;
