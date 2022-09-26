import axios from "axios"

export const getUser = (username: string) => {
    return axios.get(`https://api.github.com/users/${username}`)
}