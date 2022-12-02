import Image from 'next/image'
import React from 'react'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'



//auth
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


const Post = ({ name, message, email, postImage, image, timestamp}) => {

 
  const [user] = useAuthState(auth)


  return (
    <div className='flex flex-col'>
      <div className='p-5 bg-white mt-5 rounded-t-md'>
        <div className='flex items-center space-x-3'>
            <img
            src={user.photoURL}
            className='rounded-full'
            height={50}
            width={50}
            
          
            alt="profile-pic"
            />
            <div>
                <p className='font-medium'>{user.displayName}</p>

                {timestamp ? (
                  <p className='text-xs text-gray-400'>
                  {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
                ) : (
                  <p className='text-xs text-gray-400'>Loading</p>
                )
                }
            </div>
        </div>

        <p className='pt-10 mx-2 xl:mx-20 xl:text-xl mb-2'>gola</p>
      </div>
      {postImage && (
         <div className='relative p-4 h-56 md:h-96 bg-white'>
            <img objectFit="contain" layout="fill"   alt="pic"/>
         </div>
      )}

      {/**footer of posts */}
      <div className='flex flex-wrap justify-evenly items-center pb-4 pt-7 rounded-b-md bg-white text-gray-400 '>
        <div className='inputIcon rounded-none '>
            <ThumbUpIcon className='h-4 md:h-6 text-blue-300'/>
            <p className='text-sm sm:text-base'>Like</p>
        </div>

        <div className='inputIcon rounded-none'>
           <ChatAltIcon className='h-4 md:h-6 text-blue-300'/>
           <p className='text-xs sm:text-base'>Comment</p>
        </div>

        <div className='inputIcon rounded-none'>
           <ShareIcon className='h-4 md:h-6 text-blue-300'/>
           <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post