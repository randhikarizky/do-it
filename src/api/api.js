import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/hanabyan/',
})

export default Axios
