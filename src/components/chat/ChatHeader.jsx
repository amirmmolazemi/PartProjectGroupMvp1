import { CardHeader, IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <CardHeader
      title="پشتیبان"
      subheader="مشکل را مطرح کنید"
      action={
        <IconButton onClick={() => navigate("/tickets")}>
          <CloseIcon />
        </IconButton>
      }
      sx={{
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[1],
      }}
    />
  );
};

export default ChatHeader;
