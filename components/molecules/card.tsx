import Link from "next/link"
import { Badge } from "./badge"

type CardProps = {
    id: string,
    title: string,
    description: string,
    category: string,
    author: any,
}

export const Card: React.FC<CardProps> = ({title, description, category, author, id}) => {
    return (
        <Link href={`/enviroment/${author.username}/${id}`}>
        <div className="p-6 w-full max-w-sm max-h-[20rem] bg-white rounded-lg border border-gray-200 shadow-md cursor-pointer">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                <Badge text={category} color="bg-black" />
            </div>
            <p className="mb-3 font-normal text-gray-700">{description}</p>
            <div className="pt-3 flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <picture>
                        <source src={author.image} type="image/webp" />
                        <img className="w-10 h-10 rounded-full relative" src={author.image} alt="user" />
                    </picture>
                    <div className="leading-5">
                        <p className="font-bold">{author.name}</p>
                        <p>{author.username}</p>
                    </div>
                </div>
                <Badge text={`${0} Favorites`} color="bg-blue-500" />
            </div>
           
        </div>
        </Link>
    )
}