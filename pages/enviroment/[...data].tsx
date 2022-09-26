import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React,{ useCallback, useEffect,useMemo,useState } from 'react'
import { Footer } from '../../components/organisms/footer'
import { Navbar } from '../../components/organisms/navbar'
import { findFile } from '../../services/find-file'
import { getUser } from '../../services/get-user'

const Enviroment: React.FC = () => {
  const router = useRouter()
  const { data } = router.query
  const { data: session } = useSession()

  const user = useMemo(() => session?.user as { id: string, name: string, image: string, username: string}, [session])

  const [file,setFile] = useState<any>({})
  const [author,setAuthor] = useState<any>({})
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFindFile = async () => {
    const response = await findFile(data[1]);
    setFile(response.data);
  }

  const handleGetUser = async () => {
    const response = await getUser(data[0]);
    setAuthor(response.data);
  }

  const formatContent = (b64: string) => {
    return atob(b64)
  }

  const checkIsFavorite = useCallback(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const favoriteIndex = favorites.findIndex((item) => item.enviroment.id === file.id && user.id === item.userId)
    if(favoriteIndex < 0){
      return false;
    }
    return true;
  }, [user, file])



  useEffect(() => {
    if (data) {
      handleFindFile();
      handleGetUser();
    }
  },[data]);

  useEffect(() => {
    if(file && user){
      setIsFavorite(checkIsFavorite())
    }
  }, [file, user])

 


  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const favoriteIndex = favorites.findIndex((item) => item.enviroment.id === file.id && user.id === item.userId)

    const payload = { 
      enviroment: file,
      userId: user.id
    }

    if(favoriteIndex < 0){
      favorites.push(payload)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      setIsFavorite(true);
    }else{
      const newFavorites = favorites.filter(item => item.enviroment.id !== file.id && user.id !== item.userId)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      setIsFavorite(false);
    }
  }




  return <>
    <Navbar />
    <div className="container mx-auto">
      <div className='flex gap-10 w-full'>
        <div className='h-full w-1/6 border-gray-200 pt-6 px-4 flex flex-col items-center gap-3'>
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

        </div>

        <div className='p-4 w-full'>
          {file.title ? <div className='flex items-center justify-between'>
            <div className='w-2/3'>
              <p className='text-2xl font-bold'>{file.title}</p>
              <p className='text-lg'>{file.description}</p>
            </div>
            <button className='bg-blue-700 px-6 py-2 rounded-lg text-white' onClick={() => handleFavorite()}>{ isFavorite ? 'Unline' : 'Like'}</button>
          </div> :
            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-4 bg-gray-200 rounded-full  w-full mb-4"></div>
              <div className="h-4 bg-gray-200 rounded-full w-full mb-2.5"></div>
            </div>
          }

          {file.content ? <textarea id="message" rows={45}
            value={formatContent(file.content)}
            className="block mt-10 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
          ></textarea> : <div role="status" className="max-w-sm animate-pulse">
            <div className="h-[50vh] bg-gray-200 w-full mb-4"></div>
          </div>}

        </div>
      </div>

    </div>
    <Footer />
  </>
}

export default Enviroment