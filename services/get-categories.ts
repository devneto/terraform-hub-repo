import axios from "axios"

export const getCategories = () => {
    return axios.get(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/category/all`)
}