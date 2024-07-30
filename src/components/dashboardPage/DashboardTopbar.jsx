import { Box, IconButton, Typography, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import useJalaliDate from "../../utils/jalaliDateGenerator";

function DashboardTopbar({ setIsDrawerOpen }) {
  const date = useJalaliDate();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
    >
      <Box display="flex" alignItems="center">
        <IconButton
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box>
          <Typography variant="h4">داشبورد</Typography>
          <Typography variant="body2" color="textSecondary" fontWeight={600}>
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
        <Avatar alt="John Smith" src="/path/to/avatar.jpg" sx={{ ml: 2 }} />
      </Box>
    </Box>
  );
}

export default DashboardTopbar;
