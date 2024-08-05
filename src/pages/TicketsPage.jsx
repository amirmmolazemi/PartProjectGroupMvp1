import { useEffect, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import TicketFilters from "../components/ticketsPage/TicketFilters";
import TicketTable from "../components/ticketsPage/TicketTable";
import ButtonActions from "../components/ticketsPage/ActionButtons";
import useAuth from "../hooks/useAuth";

function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isStatusEdit, setIsStatusEdit] = useState(false);
  const [userRole, setUserRole] = useState();

  const { data, loading } = useAuth("/ticket/get");

  useEffect(() => {
    if (!loading && data) {
      console.log("Fetched data:", data);
      setTickets(data.otherData.data);
      setUserRole(data.user.role.englishName);
    }
  }, [data, loading]);
  useEffect(() => {
    let newFilteredTickets = tickets;

    if (filter !== "All") {
      newFilteredTickets = newFilteredTickets.filter(
        (ticket) => ticket.status === filter
      );
    }

    if (searchQuery) {
      newFilteredTickets = newFilteredTickets.filter(
        (ticket) =>
          ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTickets(newFilteredTickets);
  }, [filter, searchQuery, tickets]);

  const handleStatusChange = (ticketId, newStatus) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
    );
    setTickets(updatedTickets);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <>
        <Typography variant="h4" gutterBottom>
          تیکت های زده شده
        </Typography>
        {userRole ? (
          <>
            <ButtonActions
              onToggleStatusEdit={() => setIsStatusEdit((prev) => !prev)}
              isStatusEdit={isStatusEdit}
              role={userRole}
            />
          </>
        ) : (
          <Typography variant="h6" color="error">
            Unable to fetch user role.
          </Typography>
        )}
        <TicketFilters
          filter={filter}
          searchQuery={searchQuery}
          onFilterChange={(e) => setFilter(e.target.value)}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
        />
        <TicketTable
          tickets={filteredTickets}
          isStatusEdit={isStatusEdit}
          onStatusChange={handleStatusChange}
          loading={loading}
        />
      </>
    </Container>
  );
}

export default TicketsPage;
