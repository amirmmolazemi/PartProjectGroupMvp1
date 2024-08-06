import { useState, useEffect, useCallback } from "react";
import { Box, Card, CardContent, Stack, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import Message from "components/chat/Messages";
import SendMessage from "components/chat/SendInput";
import ChatHeader from "components/chat/ChatHeader";
import api from "configs/api";
import useAuth from "hooks/useAuth";
import Cookies from "js-cookie";
import Loader from "components/Loader/Loader";
import toastMaker from "src/utils/toastMaker";

const ChatBox = () => {
  const location = useLocation();
  const { ticketId, initialMessage } = location.state || {};

  const { data, loading } = useAuth(`message/get/${ticketId}`);
  const userRole = data?.user?.role.englishName;
  const normalizedUserRole =
    userRole === "admin" || userRole === "support" ? "agent" : userRole;

  const theme = useTheme();

  const [messages, setMessages] = useState(
    initialMessage ? [{ text: initialMessage, sender: normalizedUserRole }] : []
  );
  const [input, setInput] = useState("");
  const [loadingMessages, setLoadingMessages] = useState(false);

  const fetchMessages = useCallback(async () => {
    setLoadingMessages(true);
    try {
      const { data } = await api.get(`/message/get/${ticketId}`, {
        headers: {
          Authorization: Cookies.get("token"),
        },
      });

      setMessages(data.data.ticketMessages);
    } catch (error) {
      toastMaker("error", "خطا هنگام دریافت پیام ها");
    } finally {
      setLoadingMessages(false);
    }
  }, [ticketId]);

  useEffect(() => {
    if (ticketId) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 120000);
      return () => clearInterval(interval);
    }
  }, [ticketId, fetchMessages]);

  if (loading || loadingMessages) return <Loader />;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
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
          boxShadow: theme.shadows[3],
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
            boxShadow: theme.shadows[1],
          }}
        >
          <Stack spacing={2}>
            {messages.map((message) => {
              const messageSender =
                message.user.role.englishName === "admin" ||
                message.user.role.englishName === "support"
                  ? "agent"
                  : message.user.role.englishName;
              return (
                <Message
                  key={message.id}
                  text={message.message}
                  sender={messageSender}
                  currentUserRole={normalizedUserRole}
                />
              );
            })}
          </Stack>
        </CardContent>
        <SendMessage
          input={input}
          setInput={setInput}
          fetchMessages={fetchMessages}
          ticketId={ticketId}
        />
      </Card>
    </Box>
  );
};

export default ChatBox;
