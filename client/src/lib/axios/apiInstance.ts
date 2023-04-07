import axios from 'axios'

const apiInstance = axios.create({
   baseURL: 'http://localhost:5005',
   timeout: 5000
})

export default apiInstance
