import { Grid, Paper, Typography } from "@mui/material";
import DashboardInformationCard from "./DashboardInformationCard";

function DashboardContent() {
  return (
    <>
      <Grid container spacing={2} mb={4}>
        <DashboardInformationCard
          message="مجموع کل تیکت ها"
          count={20}
          bgColor="#E3F2FD"
        />
        <DashboardInformationCard
          message="تیکت های بسته:"
          count={17}
          bgColor="#FFF3E0"
        />
        <DashboardInformationCard
          message="تیکت های باز:"
          count={3}
          bgColor="#E8F5E9"
        />
      </Grid>

      <Paper sx={{ p: 2, mb: 4 }}>
        <Typography variant="body1">Revenue Chart</Typography>
      </Paper>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="body1">Transactions</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="body1">Oxish Project Team</Typography>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Typography variant="body1">Upcoming Event Planning</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardContent;
