
import React from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import Image from 'next/image'

const Viwed = () => {
  return (
    <div>
        <div className='flex justify-between'>
        <h2 className='text-xl text-black font-bold'>Recently Viewed</h2>
        <DotsHorizontalIcon className='h-6 text-gray-500 cursor-pointer'/>
        </div>

        <div className='grid grid-cols-2 p-4'>
          <img   alt="pic" src="/view-one.jpg" height={100} width={100} className="view-img"/>
          <img   alt="pic" src="/view-two.jpg" height={100} width={100} className="view-img"/>
          <img   alt="pic" src="/view-three.jpg" height={100} width={100} className="view-img"/>
          <img   alt="pic" src="/view-four.jpg" height={100} width={100} className="view-img"/>
        </div>
    </div>
  )
}

export default Viwed