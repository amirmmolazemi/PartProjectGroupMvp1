import { Box, Button } from "@mui/material";

function FormButtons({ handleCancel }) {
  return (
    <Box display="flex" gap={2} mt={2}>
      <Button type="submit" variant="contained" fullWidth>
        ارسال تیکت
      </Button>
      <Button
        variant="contained"
        color="error"
        fullWidth
        onClick={handleCancel}
      >
        لغو عملیات
      </Button>
    </Box>
  );
}

export default FormButtons;
