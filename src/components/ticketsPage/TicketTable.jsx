import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TableCellStyle = { textAlign: "center" };

const TicketTable = ({ tickets, filter }) => (
  <Paper elevation={3}>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={TableCellStyle}>ID</TableCell>
            <TableCell sx={TableCellStyle}>Priority</TableCell>
            <TableCell sx={TableCellStyle}>Assignee</TableCell>
            <TableCell sx={TableCellStyle}>Description</TableCell>
            <TableCell sx={TableCellStyle}>Status</TableCell>
            <TableCell sx={TableCellStyle}>Released by</TableCell>
            <TableCell sx={TableCellStyle}>Created on</TableCell>
            <TableCell sx={TableCellStyle}>Completion Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets
            .filter((ticket) => filter === "All" || ticket.status === filter)
            .map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell sx={TableCellStyle}>{ticket.id}</TableCell>
                <TableCell sx={TableCellStyle}>{ticket.priority}</TableCell>
                <TableCell sx={TableCellStyle}>{ticket.assignee}</TableCell>
                <TableCell sx={TableCellStyle}>{ticket.description}</TableCell>
                <TableCell sx={TableCellStyle}>{ticket.status}</TableCell>
                <TableCell sx={TableCellStyle}>{ticket.releasedBy}</TableCell>
                <TableCell sx={TableCellStyle}>{ticket.createdOn}</TableCell>
                <TableCell sx={TableCellStyle}>
                  {ticket.completionDate}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);

export default TicketTable;
