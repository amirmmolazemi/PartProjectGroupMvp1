import { useState, useRef, useEffect, useCallback } from "react";
import { Box, Card, CardContent, Stack, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import Message from "../components/chat/Messages";
import SendMessage from "../components/chat/SendInput";
import ChatHeader from "../components/chat/ChatHeader";
import api from "../configs/api";
import useAuth from "../hooks/useAuth";
import Cookies from "js-cookie";

const ChatBox = () => {
  const location = useLocation();
  const { ticketId, initialMessage } = location.state || {};

  const { data: authData, loading: authLoading } = useAuth(
    `message/get/${ticketId}`
  );
  const userRole = authData?.role;
  const theme = useTheme(); // Access the theme

  const [messages, setMessages] = useState(
    initialMessage ? [{ text: initialMessage, sender: "user" }] : []
  );
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchMessages = useCallback(async () => {
    try {
      const res = await api.get(`/chat/${ticketId}`, {
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      setMessages(res.data.messages);
    } catch (error) {
      console.log(error);
    }
  }, [ticketId]);

  useEffect(() => {
    if (ticketId) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 120000);
      return () => clearInterval(interval);
    }
  }, [ticketId, fetchMessages]);

  const handleSend = useCallback(() => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: userRole === "support" ? "agent" : "user" },
      ]);
      setInput("");
    }
  }, [input, userRole]);

  if (authLoading) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: theme.palette.background.default,
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: 400, md: 500, lg: 600 },
          height: "100%",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          boxShadow: theme.shadows[3], // Adjust box shadow based on theme
        }}
      >
        <ChatHeader />
        <CardContent
          sx={{
            padding: 2,
            flexGrow: 1,
            overflowY: "auto",
            bgcolor: theme.palette.background.paper,
            scrollbarWidth: "none",
            boxShadow: theme.shadows[1], // Adjust box shadow based on theme
          }}
        >
          <Stack spacing={2}>
            {messages.map((message, index) => (
              <Message
                key={index}
                text={message.text}
                sender={message.sender}
              />
            ))}
            <div ref={endOfMessagesRef} />
          </Stack>
        </CardContent>
        <SendMessage
          input={input}
          setInput={setInput}
          handleSend={handleSend}
        />
      </Card>
    </Box>
  );
};

export default ChatBox;
