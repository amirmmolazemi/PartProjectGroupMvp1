import React from "react";
import { Box, IconButton, Typography, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import useJalaliDate from "../../utils/jalaliDateGenerator";

function DashboardTopbar({ setIsDrawerOpen, username }) {
  const date = useJalaliDate();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
      p={2}
      bgcolor="#fff"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      borderRadius={2}
    >
      <Box display="flex" alignItems="center">
        <IconButton
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box ml={2}>
          <Typography variant="h6" color="textSecondary">
            {date}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <Avatar alt={username} src="/path/to/avatar.jpg" sx={{ ml: 2 }} />
      </Box>
    </Box>
  );
}

export default DashboardTopbar;
