import { TextField } from "@mui/material";

function UsernameField() {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      label="Username"
      name="username"
      autoFocus
      InputLabelProps={{ style: { color: "#fff" } }}
      InputProps={{ style: { color: "#fff" } }}
      sx={{ bgcolor: "#333", borderRadius: 1, mb: 2 }}
    />
  );
}

export default UsernameField;
