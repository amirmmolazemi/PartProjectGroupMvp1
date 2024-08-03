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
          borderColor: "primary.main",
        },
      }}
    />
    <Button variant="contained" color="primary" onClick={handleSend}>
      ارسال
    </Button>
  </Box>
);

export default SendMessage;
