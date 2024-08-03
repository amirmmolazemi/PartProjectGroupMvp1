import { Checkbox, FormControlLabel, Typography } from "@mui/material";

function ShowPasswordCheckBox({ setShowPassword, showPassword }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={showPassword}
          onChange={() => setShowPassword((prev) => !prev)}
          sx={{ color: "#fff" }}
        />
      }
      label={
        <Typography variant="body2" sx={{ color: "#fff" }}>
          نمایش گذرواژه
        </Typography>
      }
      sx={{ color: "#fff" }}
    />
  );
}

export default ShowPasswordCheckBox;
