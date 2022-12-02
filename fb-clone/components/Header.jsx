import Image from 'next/image'
import React from 'react'
import {
    BellIcon,
    SupportIcon,
    ChevronDownIcon,
    HomeIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";

import {
    PlayIcon,
    SearchIcon,
    UserGroupIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from './HeaderIcon';
import { BsMessenger } from 'react-icons/bs'




//auth
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'



const Header = () => {

   
  const [user] = useAuthState(auth)

  console.log(user)

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 lg:pt-7'>

        {/**left */}
         <div 
         className='flex items-center'
         >
            <img
            src="/logo.png"
            width={40}
            height={40}
            layout="fixed"
            />
    
         <div
          className='flex ml-4 items-center p-2 text-xl'
          >
            <SearchIcon
             className='h-6 text-gray-400'
              />
            <input
             className='hidden md:inline-flex ml-3 bg-transparent items-center outline-none placeholder-gray-400 flex-shrink'
              type="text"
              placeholder='Search . . .'
              />
         </div>
         </div> 
        {/**center */}
         <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon active Icon={HomeIcon} />
                <HeaderIcon Icon={ViewGridIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
            </div>
         </div>
        {/**right */}
        <div className='flex items-center sm:space-x-3 justify-end'>
          
           <SupportIcon className='icon'/>
            <BsMessenger className='icon-messanger'/>
           <div>
           <div className='hidden xl:block h-2.5 w-2.5 absolute bg-red-500 rounded-full ml-6 mt-1'/>
            <BellIcon className='icon'/>
           </div>

            {/**profile pic */}
       <div className='flex items-center border-l p-2'>
       <img
            src={user.photoURL}
            alt="pic"
            height="40"
            width="40"
            className="rounded-full cursor-pointer mx-2"
            layout="fixed"
            
            />

            <p className='hidden lg:block whitespace-nowrap font-semibold pr-3'>{user.displayName}</p>
       </div>

            <ChevronDownIcon className='icon'/>
        </div>
    </div>
  )
}

export default Header