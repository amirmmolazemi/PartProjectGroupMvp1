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

const getStatusLabel = (status) => {
  switch (status) {
    case "completed":
      return "بسته";
    case "pending":
      return "باز";
    case "in-progress":
      return "در حال بررسی";
    default:
      return status;
  }
};

const TicketTable = ({ tickets, isStatusEdit, onStatusChange, loading }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const tableCellStyle = {
    textAlign: "center",
    maxWidth: isSmallScreen ? "70px" : "100px",
  };

  return (
    <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
      <TableContainer sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={tableCellStyle}>عنوان</TableCell>
              <TableCell sx={tableCellStyle}>توضیحات</TableCell>
              <TableCell sx={tableCellStyle}>اولویت</TableCell>
              <TableCell sx={tableCellStyle}>وضعیت</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} sx={{ textAlign: "center" }}>
                  Loading...
                </TableCell>
              </TableRow>
            ) : tickets.length > 0 ? (
              tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell sx={tableCellStyle}>{ticket.title}</TableCell>
                  <TableCell sx={tableCellStyle}>
                    {ticket.description}
                  </TableCell>
                  <TableCell sx={tableCellStyle}>
                    {ticket.priority ? ticket.priority.description : "نا مشخص"}
                  </TableCell>
                  <TableCell sx={tableCellStyle}>
                    {isStatusEdit ? (
                      <Select
                        value={ticket.status}
                        onChange={(e) =>
                          onStatusChange(ticket.id, e.target.value)
                        }
                        sx={{ fontSize: "0.8rem" }}
                        size="small"
                      >
                        <MenuItem value="completed">بسته</MenuItem>
                        <MenuItem value="pending">باز</MenuItem>
                        <MenuItem value="in-progress">در حال بررسی</MenuItem>
                      </Select>
                    ) : (
                      getStatusLabel(ticket.status)
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} sx={{ textAlign: "center" }}>
                  Ticket not found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TicketTable;
