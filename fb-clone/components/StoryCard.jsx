import React from 'react'
import Image from 'next/image'

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className='relative h-14 w-14 md:w-20 md:h-20 lg:h-56 lg:w-36 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
        <img
        className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-4 circle-img md:border-2 p-0.5 md:border-separate md:border-spacing-1 md:border-blue-600' 
        src={profile}
        alt="pic"
        width={40}
        height={40}
        layout="fixed"
        />
        <img
        className='object-cover brightness-75 rounded-full md:rounded-md'
        src={src}
        alt="pic"
        layout="fill"
        />
        <p className='opacity-0 lg:opacity-100 md:absolute bottom-2 text-white flex text-sm'>{name}</p>
    </div>
  )
}

export default StoryCard