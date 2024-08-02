import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import jalaliDateGenerator from "../../utils/jalaliDateGenerator";
import { WbSunny } from "@mui/icons-material";

function Header({ setIsDrawerOpen }) {
  const date = jalaliDateGenerator();
  const isUnder955px = useMediaQuery("(max-width: 955px)");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
      p={2}
      bgcolor="#fff"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      borderRadius={2}
    >
      <Box display="flex" alignItems="center">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <WbSunny />
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
