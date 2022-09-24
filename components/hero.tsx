import React from 'react'

export const Hero: React.FC = () => {
    return (
          <div className="container mx-auto h-[38rem] flex flex-col gap-10 items-center justify-center">
                <div className='text-center'>
                    <h2 className="text-black text-8xl font-black">Develop</h2>
                    <h2 className="text-black text-8xl font-black">Build</h2> 
                    <h2 className="text-black text-8xl font-black">Share</h2> 
                </div>
                <div className='flex gap-5'>
                    <button className='bg-black px-6 py-2 rounded-lg text-white'>Find repositories</button>
                    <button className='bg-blue-700 px-6 py-2 rounded-lg text-white'>Join the community</button>
                </div>

                <span className='text-center'>Terraform hub is an open source repositories service created with the aim of sharing pre-configured environments in terraform format and assisting in their development.</span>
          </div>
    )
}