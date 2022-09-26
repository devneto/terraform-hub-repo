import { useSession } from "next-auth/react";
import React, { useEffect, useMemo, useState } from "react";
import { Card } from "../../components/molecules/card";
import { Footer } from "../../components/organisms/footer";
import { Navbar } from "../../components/organisms/navbar";
import { getUser } from "../../services/get-user";

const Profile: React.FC = () => {

    const { data: session } = useSession()
    const [author, setAuthor] = useState<any>()
    const [items, setItems] = useState([])

    const user = useMemo(() => session?.user as { id: string, name: string, image: string, username: string }, [session])

    const handleGetUser = async () => {
        const response = await getUser(user.username);
        setAuthor(response.data);
    }

    useEffect(() => {
        if(user){
            handleGetUser();
            const favorites = JSON.parse(localStorage.getItem('favorites')) || []
            const myFavorites = favorites.filter(item => item.userId === user.id);
            setItems(myFavorites);
        }
    },[user])


    return (
        <>
            <Navbar />
            <div className="container mx-auto min-h-[50vh]">
                <div className='flex gap-10 w-full'>
                    {author ? <div className='h-full w-1/6 border-gray-200 pt-6 px-4 flex flex-col items-center gap-3'>
                        <div className='w-full flex justify-center'>
                            <picture>
                                <source src={author.avatar_url} type="image/webp" />
                                <img className="max-w-[10rem] rounded-full" src={author.avatar_url} alt="user" />
                            </picture>
                        </div>
                        <div className="leading-5 text-center">
                            <p className='font-bold'>{author.name}</p>
                            <p className='text-sm'>{author.login} | {author.company}</p>
                            <hr className='my-3' />
                            <p className='text-sm mt-3'>{author.bio}</p>
                            <hr className='my-3' />
                            <p className='text-sm mt-3'>{author.location}</p>
                        </div>

                    </div> : <div>
                    <div role="status" className="max-w-sm animate-pulse">
                            <div className="h-10 bg-gray-200 rounded-lg  w-48"></div>
                        </div>
                        </div>}

                <div className="p-3">
                    <h2 className="text-2xl font-bold">Arsenal</h2>
                    <div className="mt-4 flex">
                        <>
                        {
                           items.length > 0 ? items.map((env) => (
                                <Card key={env.enviroment.id} {...env.enviroment} category={env.enviroment.subcategories[0].subcategory.title}/>
                            )) : (<p>Not found...</p>)
                        }
                        </>
                        
                    </div>
                </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Profile;