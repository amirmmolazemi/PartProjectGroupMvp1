import { Box, Button, TextField, useTheme } from "@mui/material";

const SendMessage = ({ input, setInput, handleSend }) => {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      sx={{
        padding: 2,
        borderTop: `1px solid ${theme.palette.divider}`, // Adapt to theme
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
      <Button variant="contained" color="primary" onClick={handleSend}>
        ارسال
      </Button>
    </Box>
  );
};

export default SendMessage;
