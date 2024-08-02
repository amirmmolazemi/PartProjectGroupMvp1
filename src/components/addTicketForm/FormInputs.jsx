import { TextField, Grid } from "@mui/material";
import inputs from "../../constant/AddTicketForminputs";

function FormInputs({ handleChange, formData }) {
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
            value={formData[input.name]}
            onChange={handleChange}
            multiline={input.multiline}
            rows={input.rows}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default FormInputs;
