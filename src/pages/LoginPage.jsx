import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import UsernameField from "../components/loginPage/UsernameField";
import PasswordField from "../components/loginPage/PasswordField";
import SignInButton from "../components/loginPage/SignInButton";
import ToastContainerPart from "../utils/ToastContainerPart";
import useLogin from "../utils/LoggingProcessor";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signInHandler } = useLogin(username, password);
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
          خوش آمدید
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
          onSubmit={signInHandler}
        >
          <UsernameField setUsername={setUsername} />
          <PasswordField
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setPassword={setPassword}
          />
          <SignInButton />
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2" color="white" fontWeight={500}>
                ایا اکانت ندارید؟ <Link to="/signup">ثبت نام کنید </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ToastContainerPart />
    </Container>
  );
}

export default LoginPage;
