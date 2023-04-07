import axios from 'axios'

const PROTOCOL = import.meta.env.VITE_PROTOCOL || 'http'
const HOST = import.meta.env.VITE_HOST || 'localhost'
const PORT = import.meta.env.VITE_HOST_PORT || '5005'

const apiInstance = axios.create({
   baseURL: `${PROTOCOL}://${HOST}:${PORT}/api`,
   timeout: 5000,
})

export default apiInstance
