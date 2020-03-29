import axios from 'axios'


const api = axios.create({
  baseURL: '192.168.0.183:4444'
})

export default api;