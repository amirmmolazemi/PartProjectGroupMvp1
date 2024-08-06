import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ActionButtons = ({ onToggleStatusEdit, isStatusEdit, role }) => {
  const navigate = useNavigate();

  const handleAddTicketClick = () => {
    navigate("/add");
  };

  return (
    <Box mb={2} display="flex" gap={1}>
      {role === "user" ? (
        <Button
          variant="contained"
          color="success"
          onClick={handleAddTicketClick}
        >
          افزودن تیکت
        </Button>
      ) : (
        <>
          <Button
            variant="contained"
            color="warning"
            onClick={onToggleStatusEdit}
          >
            {isStatusEdit ? "تایید" : "ویرایش وضعیت تیکت ها"}
          </Button>
        </>
      )}
    </Box>
  );
};

export default ActionButtons;
