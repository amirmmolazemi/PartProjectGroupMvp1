import { useTheme } from "@emotion/react";
import { Box, CircularProgress } from "@mui/material";

function Loader() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: theme.palette.background.default,
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;
