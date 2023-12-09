'use client'
import React from 'react'
import { HiPencilAlt } from "react-icons/hi";
const NewChat = () => {
  return (
    <div className='flex  px-4 py-2 items-center justify-between  cursor-pointer hover:bg-gray-700 rounded-lg'>
        <div>

      <h1 className=''>New chat</h1>
        </div>
      
        <div className='ml-4'>
        <HiPencilAlt className='text-[20px]'/>
        </div>

    </div>
  )
}

export default NewChat
