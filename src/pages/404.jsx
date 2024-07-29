import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/404.png";

function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Box
          component="img"
          src={notFoundImage}
          alt="404 Not Found"
          sx={{
            width: "100%",
            maxHeight: 300,
            maxWidth: 500,
            objectFit: "contain",
            mb: 3,
          }}
        />
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
          <Link to="/login">Go Home</Link>
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
