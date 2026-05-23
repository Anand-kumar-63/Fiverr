// Use Vite proxy in dev (/api → localhost:3000) to avoid CORS issues
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000";
