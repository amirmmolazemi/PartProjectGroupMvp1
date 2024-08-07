import { Grid, Typography, useTheme } from "@mui/material";
import DashboardInformationCard from "components/dashboardPage/DashboardInformationCard";
import useAuth from "hooks/useAuth";
import Loader from "components/Loader/Loader";

function DashboardPage() {
  const { data, loading } = useAuth("/info/dashboard");
  const theme = useTheme();

  if (loading) {
    return <Loader />;
  }
  const bgColorByTheme = theme.palette.background.default;
  const count = data.otherData.data.dashboardData;

  return (
    <>
      <Grid container spacing={2} mb={4}>
        <DashboardInformationCard
          message="مجموع کل تیکت ها"
          count={count.totalTickets}
          bgColor={bgColorByTheme}
        />
        <DashboardInformationCard
          message="تیکت های بسته:"
          count={count.closedTickets}
          bgColor={bgColorByTheme}
        />
        <DashboardInformationCard
          message="تیکت های باز:"
          count={count.openTickets}
          bgColor={bgColorByTheme}
        />
      </Grid>

      <Typography variant="h2" textAlign="center" fontWeight={500}>
        به زودی
      </Typography>
    </>
  );
}

export default DashboardPage;
