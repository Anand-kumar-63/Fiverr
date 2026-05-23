import axios from "axios";
import { API_BASE_URL } from "@/lib/api";

const Newrequest = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default Newrequest;
