import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  Select,
  MenuItem,
} from "@mui/material";

const TicketTable = ({ tickets, filter, isStatusEdit, onStatusChange }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const tableCellStyle = {
    textAlign: "center",
    maxWidth: isSmallScreen ? "70px" : "100px",
  };

  const filteredTickets = tickets.filter(
    (ticket) => filter === "All" || ticket.status === filter
  );

  return (
    <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={tableCellStyle}>Assignee</TableCell>
              <TableCell sx={tableCellStyle}>Description</TableCell>
              <TableCell sx={tableCellStyle}>Priority</TableCell>
              <TableCell sx={tableCellStyle}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTickets.map((ticket, index) => (
              <TableRow key={index}>
                <TableCell sx={tableCellStyle}>{ticket.assignee}</TableCell>
                <TableCell sx={tableCellStyle}>{ticket.description}</TableCell>
                <TableCell sx={tableCellStyle}>{ticket.priority}</TableCell>
                <TableCell sx={tableCellStyle}>
                  {isStatusEdit ? (
                    <Select
                      value={ticket.status}
                      onChange={(e) => onStatusChange(index, e.target.value)}
                      sx={{ fontSize: "0.8rem" }}
                      size="small"
                    >
                      <MenuItem value="Open">باز</MenuItem>
                      <MenuItem value="InProgress">در حال بررسی</MenuItem>
                      <MenuItem value="Closed">بسته</MenuItem>
                    </Select>
                  ) : (
                    ticket.status
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TicketTable;
