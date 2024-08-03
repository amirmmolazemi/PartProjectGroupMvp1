import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ActionButtons = ({ onToggleStatusEdit, isStatusEdit }) => {
  const navigate = useNavigate();

  const handleAddTicketClick = () => {
    navigate("/add");
  };

  return (
    <Box mb={2} display="flex" gap={1}>
      <Button
        variant="contained"
        color="success"
        onClick={handleAddTicketClick}
      >
        افزودن تیکت
      </Button>
      <Button variant="contained" color="warning" onClick={onToggleStatusEdit}>
        ویرایش وضعیت تیکت ها
      </Button>
    </Box>
  );
};

export default ActionButtons;
