import {
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

function PasswordField({ showPassword, setShowPassword, setPassword }) {
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="password"
        label="گذرواژه"
        type={showPassword ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
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
            نمایش گذرواژه
          </Typography>
        }
        sx={{ color: "white" }}
      />
    </>
  );
}

export default PasswordField;
