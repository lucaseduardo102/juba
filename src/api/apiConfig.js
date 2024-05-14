import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/",
  // baseURL: 'https://jubas-backend.onrender.com/',
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((values) => {
//   console.log(values.url + "/" + JSON.stringify(values.params));
//   return values;
// });

export function registerToken({ authCredentials }) {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + authCredentials.accessToken;
    return config;
  });
}
