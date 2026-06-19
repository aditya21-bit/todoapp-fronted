import axios from "axios";

const API = axios.create({
  baseURL: "https://to-do-api-cc1h.onrender.com/api"
});

export default API;