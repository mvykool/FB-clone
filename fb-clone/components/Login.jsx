import Image from 'next/image'
import React from 'react'
import {auth} from '../firebase'
import { GoogleAuthProvider, signInWithRedirect, signInAnonymously } from 'firebase/auth'


const Login = () => {

   //onclick function to access with google

   const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
   }

/**sign in as guess */

async function signInAsGuess () {
  signInAnonymously(auth)
}


  return (
    <div className='login-bg h-screen'>
   <div className='pt-56'>
   <div className='grid place-items-center p-10 mx-[20%] xl:py-20 xl:px-10 xl:mx-[40%] login-card'>
        <Image
        className='h-36 w-36'
        src="/logo.png"
        alt='logo'
        height={200}
        width={200}
        objectFit='contain'
        />
        <button type='button' onClick={googleSignIn}  className='mt-20 cursor-pointer p-3 xl:p-5  bg-blue-800 hover:scale-110 transition duration-100 hover:bg-blue-900  rounded-xl text-white text-center'>Login with Facebook</button>

        <button type='button' onClick={signInAsGuess}  className='mt-10 cursor-pointer p-2 xl:p-4  bg-white hover:scale-110 transition duration-100 hover:bg-gray-200 rounded-xl text-blue-800 text-center'>Login as demo</button>
    </div>
   </div>
    </div>
  )
}

export default Login