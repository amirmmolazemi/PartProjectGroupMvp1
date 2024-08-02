import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const TicketChat = () => {
  const { state } = useLocation();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    const response = await fetch("/api/get-messages");
    const data = await response.json();
    setMessages(data);
  };

  const handleSendMessage = async () => {
    await fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newMessage,
        ticketId: state.formData.id,
      }),
    });
    setNewMessage("");
    fetchMessages();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        px: 2,
        py: 4,
        backgroundColor: "#f4f6f8",
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        پشتیبانی تیکت
      </Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          p: 3,
          backgroundColor: "#fff",
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <List sx={{ mb: 2 }}>
          {messages.map((message, index) => (
            <ListItem
              key={index}
              sx={{ textAlign: message.isSupport ? "right" : "left" }}
            >
              <ListItemText primary={message.text} />
            </ListItem>
          ))}
        </List>
        <Box display="flex" gap={2} mt={2}>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button variant="contained" onClick={handleSendMessage}>
            ارسال
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TicketChat;
