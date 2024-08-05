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

      <Typography variant="h2" textAlign={"center"}>
        به زودی
      </Typography>
    </>
  );
}

export default DashboardContent;
