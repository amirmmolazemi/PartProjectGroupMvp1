import { CardHeader, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ChatHeader = () => (
  <CardHeader
    title="پشتیبان"
    subheader="مشکل را مطرح کنید"
    action={
      <IconButton>
        <CloseIcon />
      </IconButton>
    }
    sx={{ bgcolor: "grey.200", color: "text.primary" }}
  />
);

export default ChatHeader;
