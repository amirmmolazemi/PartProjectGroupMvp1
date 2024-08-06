import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import notFoundImage from "assets/404.png";

function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src={notFoundImage}
        alt="404 Not Found"
        sx={{
          width: "100%",
          maxHeight: 300,
          objectFit: "contain",
          mt: 5,
        }}
      />
      <Typography variant="h3" gutterBottom>
        ارور 404 - صفحه پیدا نشد
      </Typography>
      <Typography variant="body1" paragraph>
        صفحه ی مورد نظر شما پیدا نشد
      </Typography>
      <Button component={Link} to="/" variant="contained" sx={{ mt: 3 }}>
        رفتن به صفحه ی اصلی
      </Button>
    </Container>
  );
}

export default NotFound;
