'use client'
import React from 'react'
import NewChat from '../NewChat'
import { useSession,signOut } from 'next-auth/react'


const Sidebar = () => {
  const {data } = useSession()
  return (
    <div className='p-2 flex flex-col h-screen bg-black text-white'>
      <div className="flex-1 ">
    <NewChat/>

        <div>

        </div>

      </div>

      {data && 
       <div className='flex items-center gap-4 hover:bg-gray-700 px-4 py-2 rounded-lg cursor-pointer' onClick={() => signOut()} >

         <img src={data.user?.image} alt="Profile picture" className='h-10 w-10 rounded-full' />
         <p >{data.user?.name}</p>
       </div>
      }
    </div>
  )
}

export default Sidebar
