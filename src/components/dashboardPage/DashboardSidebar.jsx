import { Grid, Box, Avatar, Typography } from "@mui/material";
function DashboardSidebar({ username, email }) {
  return (
    <Grid
      item
      xs={4}
      sm={2}
      md={2}
      lg={2}
      sx={{
        bgcolor: "#f5f5f5",
        height: "100vh",
        p: 2,
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Avatar
          alt="John Smith"
          src="/path/to/avatar.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <Typography variant="h6">{username}</Typography>
        <Typography variant="body2">{email}</Typography>
      </Box>
    </Grid>
  );
}

export default DashboardSidebar;
