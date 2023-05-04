import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '585f4f86ce8b4713ba797209b7af0b7f'
    }
});