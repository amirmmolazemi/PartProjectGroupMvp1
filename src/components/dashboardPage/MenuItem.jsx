import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function MenuItem({ to, icon, label, mt = 0 }) {
  return (
    <Button
      component={Link}
      to={to}
      sx={{
        width: "100%",
        justifyContent: "center",
        gap: 1.5,
        mt,
        color: "primary.main", // Ensuring consistent color scheme
        "&:hover": {
          bgcolor: "rgba(0, 0, 0, 0.05)", // Adding a hover effect
        },
      }}
    >
      {icon}
      <Typography variant="body2">{label}</Typography>
    </Button>
  );
}

export default MenuItem;
