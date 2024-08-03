import {
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Grid,
} from "@mui/material";

const TicketFilters = ({
  filter,
  searchQuery,
  onFilterChange,
  onSearchChange,
}) => (
  <Paper elevation={3} sx={{ p: 2 }}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6}>
        <RadioGroup
          value={filter}
          onChange={onFilterChange}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <FormControlLabel value="All" control={<Radio />} label="همه" />
          <FormControlLabel value="Open" control={<Radio />} label="باز" />
          <FormControlLabel
            value="InProgress"
            control={<Radio />}
            label="در حال بررسی"
          />
          <FormControlLabel value="Closed" control={<Radio />} label="بسته" />
        </RadioGroup>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="جستجو در تیکت ها"
          variant="outlined"
          value={searchQuery}
          onChange={onSearchChange}
          fullWidth
        />
      </Grid>
    </Grid>
  </Paper>
);

export default TicketFilters;
