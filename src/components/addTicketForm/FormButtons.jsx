import { Box, Button } from "@mui/material";

function FormButtons({ handleCancel, loading }) {
  return (
    <Box display="flex" gap={2} mt={2}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
      >
        {loading ? "در حال ارسال..." : "ارسال تیکت"}
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
