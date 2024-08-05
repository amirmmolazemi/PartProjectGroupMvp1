import { useState } from "react";
import { Drawer, Box, CssBaseline, useMediaQuery } from "@mui/material";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";

function Layout({ children, setDarkMode, darkMode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isUnder955px = useMediaQuery("(max-width: 955px)");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {isUnder955px ? (
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 210,
              transform: `translateX(${isDrawerOpen ? "0%" : "-100%"})`,
              transition: "transform 0.3s ease",
            },
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
        <Header
          setIsDrawerOpen={setIsDrawerOpen}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
