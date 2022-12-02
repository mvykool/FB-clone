import Image from 'next/image'
import React from 'react'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'


const Login = () => {

   //onclick function to access with google

   const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
   }

  return (
    <div className='login-bg h-screen'>
   <div className='pt-56'>
   <div className='grid place-items-center py-20 px-10 mx-[40%] login-card'>
        <Image
        src="/logo.png"
        alt='logo'
        height={200}
        width={200}
        objectFit='contain'
        />
        <h1 onClick={googleSignIn}  className='mt-20 cursor-pointer p-5 bg-blue-800 rounded-xl text-white text-center'>Login with Facebook</h1>
    </div>
   </div>
    </div>
  )
}

export default Login