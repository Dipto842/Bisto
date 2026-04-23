import axios from "axios";
const AxosPublis = axios.create({
    baseURL: 'http://localhost:5000'
})

const AxiosPublis = () => {

    return AxosPublis;
};

export default AxiosPublis;