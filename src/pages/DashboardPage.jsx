import { useState } from "react";
import { Grid, Drawer, Box } from "@mui/material";
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

  useCheckCookie();

  if (loading) {
    return <Loader />;
  }

  return (
    <Grid container>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}></Box>
      </Drawer>
      <DashboardSidebar username={userName} email={userEmail} />
      <Grid item xs={8} sm={10} md={10} lg={10} sx={{ p: 4 }}>
        <DashboardTopbar setIsDrawerOpen={setIsDrawerOpen} />
        <DashboardContent />
      </Grid>
      <ToastContainerPart />
    </Grid>
  );
}

export default DashboardPage;
