
import axios from 'axios'

class WebServiceApi{
    getWebServices(){
        return axios.get('http://localhost:9095/webServices');
    }
}

export default new WebServiceApi();