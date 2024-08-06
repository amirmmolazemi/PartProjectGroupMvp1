import { Grid, Paper, Typography, useTheme } from "@mui/material";

function DashboardInformationCard({ message, count, bgColor }) {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={4}>
      <Paper
        sx={{
          p: 2,
          bgcolor: bgColor || theme.palette.background.paper,
          borderRadius: 2,
          boxShadow: theme.shadows[3],
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Typography variant="h6" fontWeight={700} color="primary">
          {message}
        </Typography>
        <Typography variant="h4" sx={{ mt: 1 }} color="primary">
          {count}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default DashboardInformationCard;
