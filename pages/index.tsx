import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className='h-[80vh] w-[100vw] flex items-center justify-center'>
      <div className='h-[70vh] w-[60vw] bg-emerald-400 flex'>
        <div className='w-[50%] '>
          <h1 className='lobster '>Hello</h1>
        </div>
        <div className='w-[50%] flex items-end justify-end'>
          <Image alt='logo' src={'/home.png'} width={200} height={200} className='w-[270px] h-[100%] object-contain'/>
        </div>
      </div>
      
    </div>
  )
}

export default index