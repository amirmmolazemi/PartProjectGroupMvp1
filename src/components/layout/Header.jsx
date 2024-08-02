import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import jalaliDateGenerator from "../../utils/jalaliDateGenerator";
import { Add, WbSunny } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Header({ setIsDrawerOpen }) {
  const date = jalaliDateGenerator();
  const isUnder955px = useMediaQuery("(max-width: 955px)");
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
      p={2}
      bgcolor="#fff"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      borderRadius={2}
    >
      <Box display="flex" alignItems="center">
        <IconButton>
          <WbSunny />
        </IconButton>
        <IconButton onClick={() => navigate("/add")}>
          <Add />
        </IconButton>
      </Box>
      <Box display="flex" alignItems="center">
        {isUnder955px && (
          <IconButton onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}
        {!isUnder955px && (
          <Box ml={2}>
            <Typography variant="h6" color="textSecondary">
              {date}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Header;
