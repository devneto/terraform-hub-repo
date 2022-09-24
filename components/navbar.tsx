import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'

export const Navbar: React.FC = () => {
    const { data: session, status } = useSession()

    const user = useMemo(() => session?.user as { name: string, image: string, username: string }, [session])

    return (
        <div>
            <div className='bg-black w-full h-12 flex items-center justify-center'>
                <span className='text-white'>Be part of the community 🥳</span>
            </div>
            <nav className="bg-white border-2 border-gray-100 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link href="/" className="flex items-center">
                        <div><h1 className='text-lg'>Terraform<span className='font-bold'>hub</span></h1></div>
                    </Link>
                    {status !== 'loading' ? <div>
                        {session?.user ?
                            <div className='flex items-center gap-6'>
                                <div className="flex cursor-pointer items-center space-x-4" data-popover-target="popover-click" data-popover-trigger="click">
                                    <picture>
                                        <source src={user.image} type="image/webp" />
                                        <img className="w-10 h-10 rounded-full relative" src={user.image} alt="user" />
                                    </picture>

                                    <div className="font-medium dark:text-white">
                                        <div>{user.name}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{user.username}</div>
                                    </div>
                                </div>
                                <div className='h-6 w-0.5 bg-black' />
                                <div className="text-sm font-bold text-black cursor-pointer dark:text-gray-400" onClick={() => signOut()}>Sair</div>

                            </div> : <div className="flex md:order-2">
                                <button onClick={() => signIn('github')} type="button" className="text-white bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
                            </div>}
                    </div> :
                        <div role="status" className="max-w-sm animate-pulse">
                            <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-48"></div>
                        </div>
                    }
                </div>
            </nav>
        </div>

    )
}