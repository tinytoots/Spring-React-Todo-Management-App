import axios from "axios";

class HellowWorldService {
    executeHelloWorldService() {
        // console.log('executed service')
        return axios.get('http://localhost:8080/hello-world');
    }  
}

export default new HellowWorldService();