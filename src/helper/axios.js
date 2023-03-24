import axios from "axios";
// created axios instance to use base url everywhere
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
export default instance;