import axios from "axios";

const api = axios.create({
  baseURL: "https://apis.data.go.kr/1543061/abandonmentPublicSrvc",
  headers: {
    Accept: "application/json",
  },
});

export default api;

