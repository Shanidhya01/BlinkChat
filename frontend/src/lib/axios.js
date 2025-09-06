import axios from "axios";

const raw = "https://blink-chat-backend-silk.vercel.app" || "http://localhost:5001";
const base = raw.replace(/\/$/, "") + "/api";

console.log("AXIOS baseURL:", base);

export const axiosInstance = axios.create({
  baseURL: base,
  withCredentials: true,
});

export default axiosInstance;
