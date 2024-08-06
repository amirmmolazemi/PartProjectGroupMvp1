import { Visibility } from "@mui/icons-material";
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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const tableCellStyle = {
    textAlign: "center",
    padding: isSmallScreen ? "8px" : "16px",
    minWidth: isSmallScreen ? "80px" : "120px",
    overflow: "hidden",
  };

  const handleRowClick = (ticketId, ticketDescription) => {
    navigate("/chat", {
      state: { ticketId, initialMessage: ticketDescription },
    });
  };

  return (
    <Paper elevation={3} sx={{ mt: 2, p: 2 }}>
      <TableContainer
        sx={{
          maxHeight: "500px",
          overflowY: "auto",
        }}
      >
        <Table
          stickyHeader
          sx={{
            tableLayout: "fixed",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={tableCellStyle}>کد</TableCell>
              <TableCell sx={tableCellStyle}>عنوان</TableCell>
              <TableCell sx={tableCellStyle}>توضیحات</TableCell>
              <TableCell sx={tableCellStyle}>اولویت</TableCell>
              <TableCell sx={tableCellStyle}>وضعیت</TableCell>
              <TableCell sx={tableCellStyle}>دیدن گفتگو</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: "center" }}>
                  Loading...
                </TableCell>
              </TableRow>
            ) : tickets.length > 0 ? (
              tickets.map((ticket) => (
                <TableRow key={ticket.id} hover>
                  <TableCell sx={tableCellStyle}>{ticket.id}</TableCell>
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
                  <TableCell
                    sx={(tableCellStyle, { cursor: "pointer" })}
                    onClick={() =>
                      handleRowClick(ticket.id, ticket.description)
                    }
                  >
                    <Visibility />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: "center" }}>
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
