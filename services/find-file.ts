import axios from "axios"

export const findFile = (id: string) => {
    return axios.get(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/environments/${id}`)
}