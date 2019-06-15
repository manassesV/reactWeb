import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.mercadolibre.com/',
    timeout: 100000
})

export default api

