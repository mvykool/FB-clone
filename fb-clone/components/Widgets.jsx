import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact';
import Image from 'next/image';
import { BsCheckLg } from 'react-icons/bs'

/**contact list */

const contacts = [
  {
      name: "Kevin Smith",
      src: "/person-one.jpg",
      profile: "/profile-one.jpg",
  },
  {
      name: "Maria Hernandez",
      src: "/person-two.jpg",
      profile:"/profile-two.jpg",
  },
  {
      name: "Diego Dos Santos",
      src: "/person-three.jpg",
      profile: "/profile-three.jpg",
  },
  {
      name: "Ana Zanetti",
      src: "/person-four.jpg",
      profile: "/profile-four.jpg",
  },
  {
      name: "James Owens",
      src: "/person-five.jpg",
      profile: "/profile-five.jpg",
  },
  {
    name: "Abiola Ibrahim",
    src: "/profile-six.jpg",
    profile: "/profile-six.jpg",
  },
  {
   name: "Aaliyah Ali",
   src: "/profile-seven.jpg",
   profile: "/profile-seven.jpg",
  },
];


const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-[370px] p-4 pt-5 bg-white'>
      <div className='flex justify-between items-center p-2 text-gray-500 mb-1'>

      <h2 className='text-xl text-black font-bold'>Events</h2>
        
        <DotsHorizontalIcon className='h-6 cursor-pointer'/>
      </div>

      {/**event pic */}

      <div className='transition duration-200 transform hover:scale-105 cursor-pointer'>
    
        <div className='absolute z-50 mt-1'>
          <div className='flex space-x-12 items-center'>
            <p className=' p-2 m-2 text-white text-lg font-bold cursor-pointer'>Turn Glow Festival 2022</p>
            <div className='p-2 bg-white rounded-lg h-10 w-8 cursor-pointer'>
            <BsCheckLg className='h-7 text-blue-600'/>
            </div>
          </div>
          <div className='mt-24 over overflow-hidden bg-black py-1 pl-5 pr-5 opacity-70 cursor-pointer'>
            <p className='text-white text-md '>Encore Event Center, San Diego, CA, US ...</p>
          </div>
        </div>
        
        <Image
        className='rounded-md mb-10 cursor-pointer'
        src="/events.jpg"
        height={400}
        width={400}
        />
        
      </div>


        <div className='flex justify-between items-center p-2 text-gray-500 mb-5'>
            <h2 className='text-xl text-black font-bold'>Messenger</h2>
            <div className='flex space-x-2'>
               <VideoCameraIcon className='h-6 cursor-pointer'/>
               <SearchIcon className='h-6 cursor-pointer'/>
               <DotsHorizontalIcon className='h-6 cursor-pointer'/>
            </div>
        </div>
       <div className='mx-4 mt-2'>
       {contacts.map(contact => (
            <Contact
            key={contact.src}
            src={contact.src}
            name={contact.name}
            />
        ))}
       </div>
    </div>
  )
}

export default Widgets