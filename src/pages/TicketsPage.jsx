import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import TicketFilters from "components/ticketsPage/TicketFilters";
import TicketTable from "components/ticketsPage/TicketTable";
import ButtonActions from "components/ticketsPage/ActionButtons";
import useAuth from "hooks/useAuth";
import Loader from "components/Loader/Loader";

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
      setTickets(data.otherData.data);
      setUserRole(data.user.role.englishName);
    }
  }, [data, loading]);

  useEffect(() => {
    const applyFilters = () => {
      let newFilteredTickets = tickets;

      if (filter !== "All") {
        newFilteredTickets = newFilteredTickets.filter(
          (ticket) => ticket.status === filter
        );
      }

      if (searchQuery) {
        newFilteredTickets = newFilteredTickets.filter((ticket) =>
          ticket.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setFilteredTickets(newFilteredTickets);
    };
    applyFilters();
  }, [filter, searchQuery, tickets]);

  const handleStatusChange = (ticketId, newStatus) => {
    // # TODO Add to database
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
    );
    setTickets(updatedTickets);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        لیست تیکت ها
      </Typography>
      {userRole && (
        <ButtonActions
          onToggleStatusEdit={() => setIsStatusEdit((prev) => !prev)}
          isStatusEdit={isStatusEdit}
          role={userRole}
        />
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
      />
    </Container>
  );
}

export default TicketsPage;
