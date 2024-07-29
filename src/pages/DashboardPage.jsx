import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Avatar,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import useCheckCookie from "../hooks/useCheckCookie"; // Adjust the path as needed
import ToastContainerPart from "../components/loginPage/ToastContainerPart";

function DashboardPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Replace 'username' with the actual cookie name you are using
  useCheckCookie();

  return (
    <Grid container>
      {/* Sidebar Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}></Box>
      </Drawer>
      {/* Sidebar for Desktop */}
      <Grid
        item
        xs={4}
        sm={2}
        md={2}
        lg={2}
        sx={{
          bgcolor: "#f5f5f5",
          height: "100vh",
          p: 2,
          display: { xs: "none", sm: "block" },
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Avatar
            alt="John Smith"
            src="/path/to/avatar.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <Typography variant="h6">John Smith</Typography>
          <Typography variant="body2">CEO, Oxish</Typography>
        </Box>
      </Grid>

      {/* Main Content */}
      <Grid item xs={8} sm={10} md={10} lg={10} sx={{ p: 4 }}>
        {/* Header */}
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
              <Typography variant="h4">Dashboard</Typography>
              <Typography variant="body2" color="textSecondary">
                12th Oct 2023
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

        {/* Statistics Cards */}
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Paper sx={{ p: 2, bgcolor: "#E3F2FD" }}>
              <Typography variant="body1">Total Projects</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                10,724
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Paper sx={{ p: 2, bgcolor: "#FFF3E0" }}>
              <Typography variant="body1">Completed Projects</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                9,801
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Paper sx={{ p: 2, bgcolor: "#E8F5E9" }}>
              <Typography variant="body1">Running Projects</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                923
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Revenue Chart */}
        <Paper sx={{ p: 2, mb: 4 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Revenue Chart
          </Typography>
          {/* Chart component goes here */}
        </Paper>

        {/* Transactions and Team Performance */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Transactions
              </Typography>
              {/* Transactions Table goes here */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Oxish Project Team
              </Typography>
              {/* Team list goes here */}
            </Paper>
            <Paper sx={{ p: 2 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Upcoming Event Planning
              </Typography>
              {/* Event details go here */}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <ToastContainerPart />
    </Grid>
  );
}

export default DashboardPage;
