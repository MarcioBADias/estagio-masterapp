import axios from "axios";

const api = axios.create({
    baseURL: 'http://doar-computador-api.herokuapp.com/'
})

export default api;