import axios from "axios";

const baseURL: string =  'http://127.0.0.1:5000/'

const crAPI = axios.create({ baseURL })

export default crAPI

