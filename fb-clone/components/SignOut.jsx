import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'


const SignOut = () => {
  return (
    <div onClick={() => auth.signOut()}   className='text-xs font-semibold text-white bg-red-500 p-2 rounded-md cursor-pointer'>SignOut</div>
  )
}

export default SignOut