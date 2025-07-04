import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import api from "configs/api";
import toastMaker from "utils/toastMaker";
import FormInputs from "components/addTicketForm/FormInputs";
import FormButtons from "components/addTicketForm/FormButtons";

const AddTicket = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    categoryId: 1,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.categoryId || !formData.title || !formData.description) {
      toastMaker("error", "لطفا تمام فیلدها را پر کنید.");
      return;
    }

    setLoading(true);

    try {
      const { data } = await api.post("/ticket/create", formData, {
        headers: {
          Authorization: Cookies.get("token"),
        },
      });
      const { ticketId } = data.data;
      toastMaker("success", "تیکت با موفقیت اضافه شد.");
      navigate("/chat", {
        state: { initialMessage: formData.description, ticketId },
      });
    } catch (error) {
      toastMaker("error", "خطا در اضافه کردن تیکت. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/tickets");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        px: 2,
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        اطلاعات تیکت مورد نظر خود را وارد کنید.
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: "400px",
          p: 3,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 1,
          boxShadow: theme.shadows[3],
        }}
        noValidate
        autoComplete="off"
      >
        <FormInputs handleChange={handleChange} formData={formData} />
        <FormButtons handleCancel={handleCancel} loading={loading} />
      </Box>
    </Box>
  );
};

export default AddTicket;
