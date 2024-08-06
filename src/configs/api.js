import axios from "axios";

// TODO 172.30.200.234

const api = axios.create({
  baseURL: "http://172.30.200.234:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
