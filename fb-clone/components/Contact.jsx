import React from 'react'
import Image from 'next/image'

const Contact = ({ src, name}) => {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
        <img
        className='circle-img border-separate border-blue-600 border-2 p-0.5 border-spacing-1 '
        objectFit="cover"
        src={src}
        name={name}
        height={50}
        width={50}
        layout="fixed"
        />
        <p>{name}</p>
        <div className='absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full'/>
    </div>
  )
}

export default Contact