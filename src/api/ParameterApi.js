import axios from 'axios'

class ParameterApi{
    getParameters(){
        return axios.get('http://localhost:9095/parameters');
    }
}

export default new ParameterApi();