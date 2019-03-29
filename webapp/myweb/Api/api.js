// this part is for connecting to backend server via HTTP API
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:4000`
  })
}