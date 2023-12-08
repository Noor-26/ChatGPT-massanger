import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white min-h-screen '>
     
      <h1 className='text-5xl font-bold mb-3'>ChatGpt</h1>
      <h3 className='text-3xl'>How can I help you today?</h3>

    {/* examples */}

    <div className='flex gap-5 flex-col md:flex-row lg:flex-row'>

  
    <div className=''>
      <p className='capitalize text-[14px] text-[#c5c5d2]'>make a story</p>
      <p>about roman empire</p>
    </div> 
    <div>
      <p className='capitalize'>make a story</p>
      <p>about roman empire</p>
    </div>

    </div>

    </div>
  )
}

export default HomePage
