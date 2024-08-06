import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import UsernameField from "components/loginPage/UsernameField";
import PasswordField from "components/loginPage/PasswordField";
import SignInButton from "components/loginPage/SignInButton";
import loginHandler from "utils/loginHandler";
import ShowPasswordCheckBox from "components/loginPage/ShowPasswordCheckBox";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = loginHandler(username, password);

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
          maxWidth: 400,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom color="white">
          خوش آمدید
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={login}>
          <UsernameField setUsername={setUsername} />
          <PasswordField
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setPassword={setPassword}
          />
          <ShowPasswordCheckBox
            setShowPassword={setShowPassword}
            setPassword={setPassword}
          />
          <SignInButton />
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
