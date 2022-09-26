import axios from "axios"

export const getFiles = () => {
    return axios.get('/api/environments/all')
}