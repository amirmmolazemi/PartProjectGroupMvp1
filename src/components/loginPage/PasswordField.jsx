import {
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

function PasswordField({ showPassword, setShowPassword }) {
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        InputLabelProps={{ style: { color: "#fff" } }}
        InputProps={{ style: { color: "#fff" } }}
        sx={{ bgcolor: "#333", borderRadius: 1, mb: 2 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}
            sx={{ color: "#fff" }}
          />
        }
        label={
          <Typography variant="body2" color="white">
            Show Password
          </Typography>
        }
        sx={{ color: "white" }}
      />
    </>
  );
}

export default PasswordField;
