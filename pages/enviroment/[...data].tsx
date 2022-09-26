import { useRouter } from 'next/router'
import React,{ useEffect,useState } from 'react'
import { Footer } from '../../components/organisms/footer'
import { Navbar } from '../../components/organisms/navbar'
import { findFile } from '../../services/find-file'
import { getUser } from '../../services/get-user'

const Enviroment: React.FC = () => {
  const router = useRouter()
  const { data } = router.query

  const [file,setFile] = useState<any>({})
  const [user,setUser] = useState<any>({})


  const handleFindFile = async () => {
    const response = await findFile(data[1]);
    setFile(response.data);
  }

  const handleGetUser = async () => {
    const response = await getUser(data[0]);
    setUser(response.data);
  }

  const formatContent = (b64: string) => {
    return atob(b64)
  }


  useEffect(() => {
    if (data) {
      handleFindFile();
      handleGetUser();
    }
  },[data]);






  return <>
    <Navbar />
    <div className="container mx-auto">
      <div className='flex gap-10 w-full'>
        <div className='h-full w-1/6 border-gray-200 pt-6 px-4 flex flex-col items-center gap-3'>
          <div className='w-full flex justify-center'>
            <picture>
              <source src={user.avatar_url} type="image/webp" />
              <img className="max-w-[10rem] rounded-full" src={user.avatar_url} alt="user" />
            </picture>
          </div>
          <div className="leading-5 text-center">
            <p className='font-bold'>{user.name}</p>
            <p className='text-sm'>{user.login} | {user.company}</p>
            <hr className='my-3' />
            <p className='text-sm mt-3'>{user.bio}</p>
            <hr className='my-3' />
            <p className='text-sm mt-3'>{user.location}</p>
          </div>

        </div>

        <div className='p-4 w-full'>
          {file.title ? <div className='flex items-center justify-between'>
            <div className='w-2/3'>
              <p className='text-2xl font-bold'>{file.title}</p>
              <p className='text-lg'>{file.description}</p>
            </div>
            <button className='bg-blue-700 px-6 py-2 rounded-lg text-white'>Favorite</button>
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