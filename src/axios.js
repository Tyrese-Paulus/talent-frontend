import axios from 'axios';

const instance = axios.create({
    baseURL: "https://talent-backend-tp.herokuapp.com/api/v1/",
});

export default instance;