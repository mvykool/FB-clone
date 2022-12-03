import Image from 'next/image'
import React from 'react'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'



//auth
import {auth, db} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { deleteField} from "firebase/firestore"; 


const Post = ({  message, img, timestamp, id, setPosts, post}) => {

 
  const [user] = useAuthState(auth)

  console.log(post.id)

  //delete 

const deletePost = () => {
  const docRef = doc(db, `posts/${id}`);

deleteDoc(docRef)
.then(() => {
  console.log("Entire Document has been deleted successfully.")
})
.catch(error => {
  console.log(error);
})

}

 
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
            <button type='button' onClick={deletePost} >delete</button>
        </div>

        <p className='pt-10 mx-2 xl:mx-20 xl:text-xl mb-2'>{message}</p>
      </div>
      {img && (
         <div className='relative p-4 h-56 md:h-96 bg-white'>
            <Image src={img} objectFit="contain" layout="fill"   alt="pic"/>
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