import { CardHeader, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
const ChatHeader = () => {
  const navigate = useNavigate();

  return (
    <CardHeader
      title="پشتیبان"
      subheader="مشکل را مطرح کنید"
      action={
        <IconButton onClick={() => navigate("/tickets")}>
          <CloseIcon />
        </IconButton>
      }
      sx={{ bgcolor: "grey.200", color: "text.primary" }}
    />
  );
};
export default ChatHeader;
