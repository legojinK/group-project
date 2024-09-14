import axios from "axios";

const api = axios.create({
  baseURL: "http://apis.data.go.kr/1543061/abandonmentPublicSrvc",
  headers: {
    Accept: "application/json",
  },
});

export default api;

