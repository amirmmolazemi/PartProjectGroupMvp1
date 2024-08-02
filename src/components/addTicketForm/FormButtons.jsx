import { Box, Button } from "@mui/material";

function FormButtons({ handleCancel }) {
  return (
    <Box display="flex" gap={2} mt={2}>
      <Button type="submit" variant="contained" sx={{ flexGrow: 1 }}>
        ارسال تیکت
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ flexGrow: 1 }}
        onClick={handleCancel}
      >
        لغو عملیات
      </Button>
    </Box>
  );
}

export default FormButtons;
