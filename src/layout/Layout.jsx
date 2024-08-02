import { useState } from "react";
import { Drawer, Box, CssBaseline, useMediaQuery } from "@mui/material";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import useDecodeToken from "../hooks/useDecodeToken";
import Loader from "../components/Loader/Loader";

function Layout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isUnder955px = useMediaQuery("(max-width: 955px)");
  const { data, loading } = useDecodeToken();

  if (loading) return <Loader />;

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
          <Sidebar onClose={() => setIsDrawerOpen(false)} />
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
          <Sidebar />
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
        <Header setIsDrawerOpen={setIsDrawerOpen} />
        {children}
        {/* {!data ? <div>Error Loading Data</div> : children} */}
      </Box>
    </Box>
  );
}

export default Layout;
