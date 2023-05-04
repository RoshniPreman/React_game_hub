import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '036179b507b542f086d74d43faa175dd'
    }
});