import { useState, useCallback } from "react";
import { Box, Button, TextField, useTheme } from "@mui/material";
import api from "configs/api";
import Cookies from "js-cookie";
import toastMaker from "utils/toastMaker";

const SendMessage = ({ input, setInput, fetchMessages, ticketId }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  const handleSend = useCallback(async () => {
    if (input.trim()) {
      setLoading(true);
      try {
        await api.post(
          "/message/add",
          { ticketId, message: input },
          {
            headers: {
              Authorization: Cookies.get("token"),
            },
          }
        );

        await fetchMessages();
        setInput("");
      } catch (error) {
        toastMaker("error", "Error sending message:");
      } finally {
        setLoading(false);
      }
    }
  }, [input, setInput, fetchMessages]);

  return (
    <Box
      sx={{
        padding: 2,
        borderTop: `1px solid ${theme.palette.divider}`,
        display: "flex",
        alignItems: "center",
        gap: 1,
        width: "100%",
      }}
    >
      <TextField
        placeholder="پیامی را بفرستید"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        multiline
        minRows={1}
        maxRows={4}
        sx={{
          flexGrow: 1,
          borderRadius: 2,
          boxShadow: 1,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: theme.palette.text.secondary,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
            },
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? "در حال ارسال..." : "ارسال"}
      </Button>
    </Box>
  );
};

export default SendMessage;
