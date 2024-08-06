import { Grid, Typography, useTheme } from "@mui/material";
import DashboardInformationCard from "../components/dashboardPage/DashboardInformationCard";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";

function DashboardPage() {
  const { data, loading } = useAuth("/info/dashboard");
  const theme = useTheme();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Grid container spacing={2} mb={4}>
        <DashboardInformationCard
          message="مجموع کل تیکت ها"
          count={data?.otherData.data.dashboardData.totalTickets}
          bgColor={theme.palette.background.default}
        />
        <DashboardInformationCard
          message="تیکت های بسته:"
          count={data?.otherData.data.dashboardData.closedTickets}
          bgColor={theme.palette.background.default}
        />
        <DashboardInformationCard
          message="تیکت های باز:"
          count={data?.otherData.data.dashboardData.openTickets}
          bgColor={theme.palette.background.default}
        />
      </Grid>

      <Typography variant="h2" textAlign="center">
        به زودی
      </Typography>
    </>
  );
}

export default DashboardPage;
