import { useState, useRef, useEffect, useCallback } from "react";
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

  const handleSend = useCallback(() => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "agent" },
      ]);
      setInput("");
    }
  }, [input]);

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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ChatHeader />
        <CardContent
          sx={{
            padding: 2,
            flexGrow: 1,
            overflowY: "auto",
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
