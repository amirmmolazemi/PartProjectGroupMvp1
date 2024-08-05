import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Add, WbSunny, NightsStay } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import jalaliDateGenerator from "../../utils/jalaliDateGenerator";

const Header = ({ setIsDrawerOpen, setDarkMode, darkMode }) => {
  const date = jalaliDateGenerator();
  const isUnder955px = useMediaQuery("(max-width: 955px)");
  const navigate = useNavigate();
  const theme = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
      p={2}
      bgcolor={theme.palette.background.default}
      boxShadow={theme.shadows[2]}
      borderRadius={2}
    >
      <Box display="flex" alignItems="center">
        <IconButton onClick={toggleDarkMode}>
          {!darkMode ? <NightsStay /> : <WbSunny />}
        </IconButton>
        <IconButton onClick={() => navigate("/add")}>
          <Add />
        </IconButton>
      </Box>
      <Box display="flex" alignItems="center">
        {isUnder955px ? (
          <IconButton onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Typography variant="h6" color="textSecondary" ml={2}>
            {date}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Header;
