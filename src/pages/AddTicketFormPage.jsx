import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../configs/api";
import toastMaker from "../utils/toastMaker";
import FormInputs from "../components/addTicketForm/FormInputs";
import FormButtons from "../components/addTicketForm/FormButtons";

const AddTicket = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    message: "",
    title: "",
    categoryNumber: "",
    status: "pending",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.categoryNumber || !formData.title || !formData.message) {
      toastMaker("error", "اطلاعات مورد نظر را کامل وارد کنید");
      return;
    }
    const res = await api.post("/");
    navigate("/chat", { state: { formData } });
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
          backgroundColor: "#fff",
          borderRadius: 1,
          boxShadow: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <FormInputs handleChange={handleChange} formData={formData} />
        <FormButtons handleCancel={handleCancel} />
      </Box>
    </Box>
  );
};

export default AddTicket;
