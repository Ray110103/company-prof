import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://quiverwater-us.backendless.app",
});
