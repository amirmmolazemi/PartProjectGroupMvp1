import { Grid, Paper, Typography } from "@mui/material";

function DashboardInformationCard({ message, count, bgColor }) {
  return (
    <Grid item xs={12} sm={4} md={4} lg={4}>
      <Paper sx={{ p: 2, bgcolor: bgColor }}>
        <Typography variant="body1" fontWeight={600}>
          {message}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          {count}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default DashboardInformationCard;
