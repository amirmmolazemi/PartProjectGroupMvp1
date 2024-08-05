import { Grid, Typography, useTheme } from "@mui/material";
import DashboardInformationCard from "../components/dashboardPage/DashboardInformationCard";
import useAuth from "../hooks/useAuth";

function DashboardPage() {
  const { data, loading } = useAuth("/ticket/get");
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={2} mb={4}>
        <DashboardInformationCard
          message="مجموع کل تیکت ها"
          count={20}
          bgColor={theme.palette.background.default}
        />
        <DashboardInformationCard
          message="تیکت های بسته:"
          count={17}
          bgColor={theme.palette.background.default}
        />
        <DashboardInformationCard
          message="تیکت های باز:"
          count={3}
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
