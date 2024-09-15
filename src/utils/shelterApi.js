import axios from "axios";

const shelterApi = axios.create({
    baseURL: "https://apis.data.go.kr/1543061/animalShelterSrvc",
    headers:{
        Accept: "application/json",
    }
})

export default shelterApi