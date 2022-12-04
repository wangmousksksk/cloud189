import axios from 'axios'

export const request = axios.create({
    headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/107.0.0.0"
    }
});

request.interceptors.response.use((response) => response.data,
    (error) => Promise.reject(error.response.data));