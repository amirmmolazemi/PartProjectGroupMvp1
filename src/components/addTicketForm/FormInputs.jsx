import { TextField, Grid, useTheme } from "@mui/material";
import inputs from "../../constant/AddTicketForminputs";

function FormInputs({ handleChange, formData }) {
  const theme = useTheme(); // Access the theme

  return (
    <Grid container spacing={2}>
      {inputs.map((input) => (
        <Grid item key={input.id} xs={12} sm={input.sm}>
          <TextField
            variant="outlined"
            fullWidth
            id={input.id}
            label={input.label}
            name={input.name}
            type={input.type}
            value={formData[input.name]}
            onChange={handleChange}
            multiline={input.multiline}
            rows={input.rows}
            InputProps={{
              style: { color: theme.palette.text.primary }, // Adapt to theme
            }}
            InputLabelProps={{
              style: { color: theme.palette.text.secondary }, // Adapt to theme
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.text.secondary, // Adapt to theme
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main, // Adapt to theme
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.main, // Adapt to theme
                },
              },
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default FormInputs;
