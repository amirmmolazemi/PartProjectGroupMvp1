import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import NotFoundSVG from "./NotFoundSVG";

function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, textAlign: "center" }}>
        {/* <NotFoundSVG width="100%" height="200px" /> */}
        <Typography variant="h3" gutterBottom color="white">
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" color="white" paragraph>
          Oops! The page you are looking for does not exist.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Go Home
          </Link>
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
