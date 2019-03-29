// used for GET action to server
import api from './api'
export default {
    fetchGet(){
        return api.get('/get')
    }
}