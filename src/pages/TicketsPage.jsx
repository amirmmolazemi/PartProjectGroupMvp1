import { useState } from "react";
import { Container, Typography } from "@mui/material";
import TicketFilters from "../components/ticketsPage/TicketFilters";
import TicketTable from "../components/ticketsPage/TicketTable";
import ButtonActions from "../components/ticketsPage/ActionButtons";

const initialTickets = [
  {
    priority: "P2",
    assignee: "Assignee Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "Closed",
  },
  {
    priority: "P1",
    assignee: "Assignee Name",
    description:
      "Nullam rutrum mollis orci at dapibus. Aenean gravida tristique eros ut euismod.",
    status: "Closed",
  },
];

function TicketsPage() {
  const [tickets, setTickets] = useState(initialTickets);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isStatusEdit, setIsStatusEdit] = useState(false);

  const handleStatusChange = (index, newStatus) => {
    const updatedTickets = tickets.map((ticket, i) =>
      i === index ? { ...ticket, status: newStatus } : ticket
    );
    setTickets(updatedTickets);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        تیکت های زده شده
      </Typography>
      <ButtonActions
        onToggleStatusEdit={() => setIsStatusEdit((prev) => !prev)}
        isStatusEdit={isStatusEdit}
      />
      <TicketFilters
        filter={filter}
        searchQuery={searchQuery}
        onFilterChange={(e) => setFilter(e.target.value)}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
      />
      <TicketTable
        tickets={tickets}
        filter={filter}
        isStatusEdit={isStatusEdit}
        onStatusChange={handleStatusChange}
      />
    </Container>
  );
}

export default TicketsPage;
