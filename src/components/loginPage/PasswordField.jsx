import { TextField } from "@mui/material";

function PasswordField({ showPassword, setPassword }) {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      name="password"
      label="گذرواژه"
      type={showPassword ? "text" : "password"}
      onChange={(e) => setPassword(e.target.value)}
      InputLabelProps={{ sx: { color: "#fff !important" } }}
      InputProps={{ sx: { color: "#fff" } }}
      sx={{ bgcolor: "#333", borderRadius: 1, mb: 2 }}
    />
  );
}

export default PasswordField;
