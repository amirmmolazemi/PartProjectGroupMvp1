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
        <Typography variant="h3" gutterBottom>
          ارور 404 - صفحه پیدا نشد
        </Typography>
        <Typography variant="body1" paragraph>
          صفحه ی مورد نظر شما پیدا نشد
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          رفتن به صفحه ی اصلی
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
