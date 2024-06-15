import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
    const auth = getAuth (app)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account'})
        try { 
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            const res = await fetch ('/api/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: resultsFromGoogle.user.displayName,
                email: resultsFromGoogle.user.email,
                googlePhotoUrl: resultsFromGoogle.user.photoURL,
            }),
        })
        console.log(resultsFromGoogle);
        const data = await res.json()
        if (res.ok){
            dispatch(signInSuccess(data))
            navigate('/')
        }
     } catch (error) {
            console.log(error);
        }
    }
  return (
    <button
        className=' hover:bg-red-800 hover:text-white btn my-2 text-red-800 border-2 font-bold py-2 px-4 rounded-xl w-full bg-white' 
        type='button'
        onClick={handleGoogleClick}  >Continue with Google
    </button>
  )
}
