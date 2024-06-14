import React from 'react'
import { GoogleAuthProvider } from 'firebase/auth;'

export default function OAuth() {
    const handleGoogleClick = async () =>{
        const provider = new GoogleAuthProvider()
    }
  return (
    <button
        className=' hover:bg-red-800 hover:text-white btn my-2 text-red-800 border-2 font-bold py-2 px-4 rounded-xl w-full bg-white' 
        type='button'
        onClick={handleGoogleClick}   >Continue with Google
    </button>
  )
}
