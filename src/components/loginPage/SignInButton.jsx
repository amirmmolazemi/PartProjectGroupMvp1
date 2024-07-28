import { Button } from "@mui/material";

function SignInButton() {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      sx={{ mt: 2, mb: 2 }}
    >
      Sign In
    </Button>
  );
}

export default SignInButton;
