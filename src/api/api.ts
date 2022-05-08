import axios from "axios";

const baseURL: string =  'localhost:5000'


const crAPI = axios.create({ baseURL })

export default crAPI

