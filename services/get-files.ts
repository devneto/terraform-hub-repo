import axios from "axios"

export const getFiles = () => {
    return axios.get(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/environments/all`)
}