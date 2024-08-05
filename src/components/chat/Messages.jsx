import { Avatar, Box, Typography, useTheme } from "@mui/material";
import agentAvatar from "../../assets/part.jpg";

const Message = ({ text, sender }) => {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Avatar
        src={sender === "agent" && agentAvatar}
        sx={{
          bgcolor:
            sender === "user"
              ? theme.palette.primary.main
              : theme.palette.grey[500],
        }}
      />
      <Box
        sx={{
          maxWidth: "70%",
          padding: 1.5,
          borderRadius: 2,
          bgcolor: theme.palette.primary.dark,
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[1],
          marginLeft: 2,
          marginRight: 2,
          wordBreak: "break-word",
        }}
      >
        <Typography variant="body2">{text}</Typography>
      </Box>
    </Box>
  );
};

export default Message;
