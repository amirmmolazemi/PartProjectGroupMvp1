import { Grid, Paper, Typography } from "@mui/material";

function DashboardInformationCard({ message, count, bgColor }) {
  return (
    <Grid item xs={12} sm={4} md={4} lg={4}>
      <Paper
        sx={{
          p: 2,
          bgcolor: bgColor,
          borderRadius: 2,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Typography variant="h6" fontWeight={700} color="primary">
          {message}
        </Typography>
        <Typography variant="h4" sx={{ mt: 1 }}>
          {count}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default DashboardInformationCard;
