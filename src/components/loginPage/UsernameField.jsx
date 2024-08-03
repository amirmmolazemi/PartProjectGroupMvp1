import { TextField } from "@mui/material";

function UsernameField({ setUsername }) {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      label="نام کاربری"
      name="username"
      autoFocus
      autoComplete="off"
      onChange={(e) => setUsername(e.target.value)}
      InputLabelProps={{ sx: { color: "#fff !important" } }}
      InputProps={{ sx: { color: "#fff" } }}
      sx={{ bgcolor: "#333", borderRadius: 1, mb: 2 }}
    />
  );
}

export default UsernameField;
