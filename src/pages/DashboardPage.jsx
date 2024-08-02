import { useState } from "react";
import { Drawer, Box, CssBaseline, useMediaQuery } from "@mui/material";
import DashboardSidebar from "../components/dashboardPage/DashboardSidebar";
import DashboardContent from "../components/dashboardPage/DashboardContent";
import DashboardTopbar from "../components/dashboardPage/DashboardTopbar";
import Loader from "../components/dashboardPage/Loader";
import useDecodeToken from "../hooks/useDecodeToken";

function DashboardPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isUnder955px = useMediaQuery("(max-width: 955px)");
  // const { data, loading } = useDecodeToken();

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {isUnder955px ? (
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          <DashboardSidebar onClose={() => setIsDrawerOpen(false)} />
        </Drawer>
      ) : (
        <Box
          sx={{
            width: "15%",
            display: "block",
            position: "fixed",
            height: "100vh",
            top: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <DashboardSidebar />
        </Box>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginRight: isUnder955px ? 0 : "15%",
          transition: "margin-right 0.3s",
        }}
      >
        <DashboardTopbar setIsDrawerOpen={setIsDrawerOpen} />
        <DashboardContent />
      </Box>
    </Box>
  );
}

export default DashboardPage;
