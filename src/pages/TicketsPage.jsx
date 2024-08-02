import { useState } from "react";
import { Container, Typography } from "@mui/material";
import TicketFilters from "../components/ticketsPage/TicketFilters";
import TicketTable from "../components/ticketsPage/TicketTable";

const tickets = [
  {
    id: "ABC000089",
    priority: "P2",
    assignee: "Assignee Name",
    description: "Lorem ipsum dolor sit amet, consectetur",
    status: "Resolved",
    releasedBy: "Engineer Name",
    createdOn: "21.MAR.2020",
    completionDate: "21.MAR.2020",
  },
  {
    id: "ABC000088",
    priority: "P1",
    assignee: "Assignee Name",
    description: "Nullam rutrum mollis orci at dapibus",
    status: "Open",
    releasedBy: "Engineer Name",
    createdOn: "18.MAR.2020",
    completionDate: "22.MAR.2020",
  },
];

function TicketsPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Ticket List
      </Typography>
      <TicketFilters
        filter={filter}
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        onFilterChange={(e) => setFilter(e.target.value)}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        onStatusChange={(e) => setStatusFilter(e.target.value)}
      />
      <TicketTable tickets={tickets} filter={filter} />
    </Container>
  );
}

export default TicketsPage;
