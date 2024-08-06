import { Avatar, Box, Typography, useTheme } from "@mui/material";

const Message = ({ text, sender, currentUserRole }) => {
  const theme = useTheme();
  const isCurrentUser = sender === currentUserRole;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: isCurrentUser ? "row" : "row-reverse",
        marginBottom: 2,
      }}
    >
      <Avatar
        sx={{
          bgcolor:
            sender === "user"
              ? theme.palette.primary.main
              : sender === "admin" || sender === "support"
              ? theme.palette.primary.main
              : theme.palette.grey[500],
          marginLeft: 2,
          marginRight: 2,
        }}
      />
      <Box
        sx={{
          maxWidth: "70%",
          padding: 1.5,
          borderRadius: 2,
          bgcolor: isCurrentUser
            ? theme.palette.primary.dark
            : theme.palette.primary.contrastText,
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[1],
          wordBreak: "break-word",
        }}
      >
        <Typography variant="body2">{text}</Typography>
      </Box>
    </Box>
  );
};

export default Message;
