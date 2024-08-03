import { Box, Button, TextField } from "@mui/material";

const SendMessage = ({ input, setInput, handleSend }) => (
  <Box
    sx={{
      padding: 2,
      borderTop: "1px solid #eee",
      display: "flex",
      alignItems: "center",
      gap: 1,
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    <TextField
      placeholder="پیامی را بفرستید"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter" && !e.shiftKey) handleSend();
      }}
      multiline
      minRows={1}
      maxRows={4}
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        "& .MuiInputBase-root": { borderRadius: 2 },
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "grey.400" },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main",
        },
      }}
    />
    <Button
      variant="contained"
      color="primary"
      onClick={handleSend}
      sx={{ borderRadius: 2 }}
    >
      ارسال
    </Button>
  </Box>
);

export default SendMessage;
