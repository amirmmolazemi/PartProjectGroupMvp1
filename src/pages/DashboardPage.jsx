import React, { useState } from "react";
import { Grid, Drawer, Box, CssBaseline } from "@mui/material";
import ToastContainerPart from "../utils/ToastContainerPart";
import useCheckCookie from "../hooks/useCheckCookie";
import DashboardSidebar from "../components/dashboardPage/DashboardSidebar";
import DashboardContent from "../components/dashboardPage/DashboardContent";
import DashboardTopbar from "../components/dashboardPage/DashboardTopbar";
import useDecodeToken from "../hooks/useDecodeToken";
import Loader from "../components/dashboardPage/Loader";

function DashboardPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { userName, userEmail, loading } = useDecodeToken();

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 } }}
      >
        <Box sx={{ width: 250 }}>
          <DashboardSidebar username={userName} email={userEmail} />
        </Box>
      </Drawer>
      <Grid container>
        <DashboardSidebar username={userName} email={userEmail} />
        <Grid item xs={11} sm={10} md={10} lg={10} sx={{ p: 4 }}>
          <DashboardTopbar
            setIsDrawerOpen={setIsDrawerOpen}
            username={userName}
          />
          <DashboardContent />
        </Grid>
      </Grid>
      <ToastContainerPart />
    </Box>
  );
}

export default DashboardPage;
