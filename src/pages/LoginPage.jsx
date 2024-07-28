// src/pages/LoginPage.jsx

import { useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import UsernameField from "../components/loginPage/UsernameField";
import PasswordField from "../components/loginPage/PasswordField";
import SignInButton from "../components/loginPage/SignInButton";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          p: 4,
          bgcolor: "#1d1d1d",
          borderRadius: 3,
          boxShadow: 3,
          width: isMobile ? "90%" : "100%",
          maxWidth: 400,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom color="white">
          Welcome Back!
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <UsernameField />
          <PasswordField
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <SignInButton/>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2" color="white">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  Sign up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
