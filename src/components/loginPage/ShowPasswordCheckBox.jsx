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
        <Typography variant="body2" color="white">
          نمایش گذرواژه
        </Typography>
      }
      sx={{ color: "white" }}
    />
  );
}

export default ShowPasswordCheckBox;
