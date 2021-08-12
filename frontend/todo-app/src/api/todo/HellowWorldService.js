import axios from "axios";

class HellowWorldService {

    executeHelloWorldService() {
        // console.log('executed service')
        return axios.get('http://localhost:8080/hello-world');
    }  

    executeHelloWorldBeanService() {
        // console.log('executed service')
        return axios.get('http://localhost:8080/hello-world-bean');
    }  

    executeHelloWorldPathVariableService(name) {
        // console.log('executed service')
        let username = 'chenwang'
        let password = 'password123'

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`, 
            {
                headers : {
                    authorization: basicAuthHeader
                }
            }
        );
    }  

}

export default new HellowWorldService();