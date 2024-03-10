import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/",
  // baseURL: 'https://jubas-backend.onrender.com/',
  headers: {
    "Content-Type": "application/json",
  },
});