import { useState, useRef, useEffect } from "react";
import { Box, Card, CardContent, Stack } from "@mui/material";
import Message from "../components/chat/Messages";
import SendInput from "../components/chat/SendInput";
import ChatHeader from "../components/chat/ChatHeader";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
      ]);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "background.default",
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: 400, md: 500, lg: 600 },
          height: "100%",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ChatHeader />
        <CardContent
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column-reverse",
            bgcolor: "background.paper",
            flexGrow: 1,
            maxHeight: {
              xs: "calc(100vh - 150px)",
              sm: "calc(100vh - 150px)",
              md: "calc(100vh - 180px)",
            },
            overflow: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
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
        <SendInput input={input} setInput={setInput} handleSend={handleSend} />
      </Card>
    </Box>
  );
};

export default ChatBox;
