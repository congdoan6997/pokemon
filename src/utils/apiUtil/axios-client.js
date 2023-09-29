import axios from "axios";

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json; charset=utf-8"
}


class AxiosClient {
    instance = null;
    
    init = () => {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_HOST_API,
            timeout: 10000,
            headers: headers
        });

        this.instance.interceptors.response.use(
            ({data}) => data,
            (error) => Promise.reject(error?.data)
        )
        return this.instance;
    }

    get http(){
        if (!this.instance) {
            this.instance = this.init();
        }
        return this.instance
    }

    get(url){
        return this.http.get(url);
    }

}

const axiosClient = new AxiosClient();

export default axiosClient;