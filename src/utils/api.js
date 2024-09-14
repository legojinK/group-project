import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY

const api = axios.create({
    baseURL: "http://apis.data.go.kr/1543061/animalShelterSrvc",
    headers:{
        Accept: "application/json",
        Authorization:`Bearer ${API_KEY}`
    }
})

export default api