import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import Image from "next/image";
import { GiEarthAmerica } from 'react-icons/gi'
import {BsCaretDownFill} from 'react-icons/bs'
import { DotsHorizontalIcon } from '@heroicons/react/solid'


//auth
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { storage, db } from '../firebase'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'

function InputBox() {

  const [user] = useAuthState(auth)

  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const filepickerRef = useRef(null);

  const uploadPost = async (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

   const docRef = await addDoc(collection(db, "posts"), {
    message: inputRef.current.value,
    name: user.displayName,
    email: user.email,
    image: user.photoURL,
    timestamp: serverTimestamp(),
   })


   if(!imageToPost) return    
  

    const imageRef = ref(storage,`posts/${docRef.id}/image`);

        await uploadString(imageRef, imageToPost, "data_url").then(async snapshot => {
          const downloadURL = await getDownloadURL(imageRef);
          await updateDoc(doc(db, "posts", docRef.id), {
            postImage: downloadURL
        })
    });

        
    inputRef.current.value = "";
    setImageToPost(null)
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  

  const removeImage = () => {
    setImageToPost(null);
  };



  return (
    <div className='bg-white p-4 rounded-md text-gray-500 font-medium mt-6'>
      <div className="flex">
      <img
            className='rounded-full m-5'
            src={user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/6073/6073873.png" }
            width={50}
            height={50}
            layout="fixed"
            />
            <div className="cursor-pointer">
            <p className="mt-5 text-black font-bold mb-1">{user.displayName}</p>
           <div className="flex items-center space-x-1 text-sm">
           <GiEarthAmerica/>
           <p>Public</p>
           <BsCaretDownFill className="h-3"/>
           </div>
            </div>
      </div>
        <div className='flex space-x-4 items-center'>
           
            <form className='flex flex-1'>
                <input
                className='rounded-full placeholder-gray-300 text-sm lg:text-2xl h-20 flex-grow lg:mx-24 mt-2 focus:outline-none'
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                type="text"
                ref={inputRef}
                placeholder={`What's on your mind, ${user.displayName}?`}
                />
                <button hidden type="submit" >Submit</button>
            </form>
            { imageToPost && (
                <div onClick={removeImage}  className="flex flex-col filter hover:brightness-110 transition
                 duration-150 transform hover:scale-105 cursor-pointer">
                    <img className='h-10 object-contain rounded-md' src={imageToPost} alt="image" />
                    <p className='text-xs text-red-500 text-center'>Remove</p>
                </div>
            )}
            <div className='mt-5 sm:mt-6'>
            <button type='button' 
                onClick={uploadPost}
                disabled={!inputVal}
                className='hidden xl:inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 sm:text.sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300'>
                Submit
              </button>
            </div>
        </div>
            
        {/**mobile button */}

        <div className='mt-5 sm:mt-6'>
            <button type='button' 
                onClick={uploadPost}
                disabled={!inputVal}
                className='xl:hidden inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 sm:text.sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300'>
                Submit
              </button>
            </div>

        <div className='flex flex-wrap p-2 justify-evenly border-t'>
            <div className='inputIcon'>
             <VideoCameraIcon className='h-4 md:h-7  text-red-500'/>
             <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>

            <div 
            onClick={()=> filepickerRef.current.click()}
            className='inputIcon'>
             <CameraIcon className='h-4 md:h-7  text-green-400'/>
             <p className='text-xs sm:text-sm'>Photo/Video</p>
             <input onChange={addImageToPost} ref={filepickerRef} type="file" hidden />
            </div>

            <div className='inputIcon'>
              <EmojiHappyIcon className='h-4 md:h-7  text-yellow-300'/>
              <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
            </div>

            <div className="inputIcon">
              <DotsHorizontalIcon className="h-4 md:h-7 w-20"/>
            </div>
        </div>
    </div>
  )
}

export default InputBox