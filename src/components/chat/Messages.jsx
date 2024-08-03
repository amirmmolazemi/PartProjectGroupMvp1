import { Avatar, Box, Typography } from "@mui/material";

const Message = ({ text, sender }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: sender === "agent" ? "row-reverse" : "row",
    }}
  >
    <Avatar
      sx={{
        bgcolor: sender === "agent" ? "grey.500" : "primary.main",
      }}
    ></Avatar>
    <Box
      sx={{
        maxWidth: "70%",
        padding: 1.5,
        borderRadius: 2,
        bgcolor: "grey.300",
        color: "text.primary",
        boxShadow: 2,
        marginLeft: sender === "agent" ? 2 : 0,
        marginRight: sender === "agent" ? 0 : 2,
        wordBreak: "break-word",
      }}
    >
      <Typography variant="body2">{text}</Typography>
    </Box>
  </Box>
);

export default Message;
