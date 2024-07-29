import axios from "axios";

const api = axios.create({
  baseURL: "http://172.30.200.234:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
