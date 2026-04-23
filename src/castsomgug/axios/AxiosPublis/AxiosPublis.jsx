import axios from "axios";
const AxosPublis = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const AxiosPublis = () => {

    return AxosPublis;
};

export default AxiosPublis;