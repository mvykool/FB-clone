import Image from 'next/image'
import React, { useRef, useState} from 'react'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'
import {RiDeleteBinLine} from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'

//auth
import {auth, db} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { deleteDoc, doc, updateDoc  } from 'firebase/firestore'



const Post = ({  message, img, timestamp, id, setPosts, post}) => {

  //edit ref

  const editRef = useRef();
  const [edit, setEdit] = useState(false)
 
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

//edit 


const editPost = (e) => {
  const docRef = doc(db, `posts/${id}`);

  const data = {
    message: editRef.current.value,
  }

  updateDoc(docRef, data)
.then(docRef => {
    console.log("Value of an Existing Document Field has been updated");
})
.catch(error => {
    console.log(error);
})

setEdit(false)

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
        </div>
      
        <div className='flex items-center justify-between'>
        <p className='pt-10 mx-2 xl:mx-20 xl:text-xl mb-2'>{message}</p>
       <div className='-mt-20  space-y-4'>
       <RiDeleteBinLine onClick={deletePost} className='text-red-500 cursor-pointer hover:scale-125 h-7 w-7'/>
        <FiEdit2 onClick={() => setEdit(true)} className='h-5 w-5 text-gray-400 hover:scale-125  cursor-pointer'/>

        {/**edit field */}

        {edit ?  
        <div>
          <form className=' bg-blue-500 left-[20%] z-50 xl:left-[40vw] xl:p-10 fixed p-5 rounded-md top-96'>
            <input
            type="text"
            ref={editRef}
            placeholder='edit'
            className='xl:h-20 xl:w-80 h-10 rounded-md outline-none pl-2'
            />
            <div className='flex justify-around mt-4'>
            <button onClick={editPost} className='text-blue-500 bg-white py-2 px-4 rounded-md'>Edit</button>
            <button onClick={() => setEdit(false)} className='text-blue-500 bg-white py-2 px-4 rounded-md'>Close</button>
            </div>
          </form>
        </div>
           : false}


       </div>
        </div>
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