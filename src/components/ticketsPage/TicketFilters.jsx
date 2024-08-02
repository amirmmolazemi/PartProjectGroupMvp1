import {
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  TextField,
  Box,
} from "@mui/material";

const TicketFilters = ({
  filter,
  searchQuery,
  statusFilter,
  onFilterChange,
  onSearchChange,
  onStatusChange,
}) => (
  <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
    <Paper elevation={2} sx={{ p: 2 }}>
      <RadioGroup row value={filter} onChange={onFilterChange}>
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="Open" control={<Radio />} label="Open" />
        <FormControlLabel
          value="InProgress"
          control={<Radio />}
          label="In progress"
        />
        <FormControlLabel value="Closed" control={<Radio />} label="Closed" />
      </RadioGroup>
    </Paper>
    <Box display="flex" alignItems="center" gap={2} mr={2}>
      <Select value={statusFilter} onChange={onStatusChange}>
        <MenuItem value="All">Latest created</MenuItem>
        <MenuItem value="Priority">Priority</MenuItem>
      </Select>
      <TextField
        label="Search Tickets"
        variant="outlined"
        value={searchQuery}
        onChange={onSearchChange}
      />
    </Box>
  </Box>
);

export default TicketFilters;
