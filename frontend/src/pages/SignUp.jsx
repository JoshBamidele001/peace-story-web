import React, {useState} from 'react'
import { FaSwatchbook } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { IoEyeOffOutline } from "react-icons/io5";

export default function SignUp() {
  const [showing, setshowing] = useState(false)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const show =()=>{
    {showing? setshowing(false): setshowing(true)}
    // setshowing(!showing)
}
const handlePasswordChange = (e) => {
  setPassword(e.target.value);
  validatePassword(e.target.value, confirmPassword);
};

const handleConfirmPasswordChange = (e) => {
  setConfirmPassword(e.target.value);
  validatePassword(password, e.target.value);
};

const validatePassword = (password, confirmPassword) => {
 
  if (confirmPassword = '' || password !== confirmPassword) {
    setError('Passwords do not match');
  } else {
    setError('');
  }
};

  return (
    <section className='w-screen'>

  <div class="h-screen  flex justify-center items-center" style={{ background: "linear-gradient(to left, #0066ff, #ff0000)"}}>
    <div class="w-full max-w-md p-4 bg-white rounded-xl shadow-md">

        <Link to='/'>
              <div className='flex flex-col items-center justify-center gap-2 mt-10 mb-5 '>
              <div className='flex items-center justify-center gap-2'>
              <p className='text-xl'><FaSwatchbook /></p>
              <p className='text-base md:text-2xl lg:text-3xl font-semibold'> jayBeePENS</p>
              </div>
              <small>...lets help you bring out your story</small>
              </div>
        </Link>
        <hr />

          <form>
              <h2 className='text-2xl text-center font-semibold mt-5 '>Sign Up</h2>
              <div class="mb-4">
                <label className='block text-gray-700' for="name">Name</label>
                <input
                className='border-2 rounded-xl block w-full p-2 pl-10 text-gray-700' type="text" id="name" />
              </div>
              <div class="mb-4">
                  <label className='block text-gray-700' for="email">Email</label>
                  <input
                  className='border-2 rounded-xl block w-full p-2 pl-10 text-gray-700' type="email" id="email" />
              </div>
              <div class="mb-4 relative">
                <label className='block text-gray-700' for="password">Password</label>
                <input 
                  value={password}
                  onChange={handlePasswordChange}
                  className='border-2 rounded-xl block w-full p-2 pl-10 text-gray-700'
                  type={showing? "password" : "text"} id="password" />
                  
                <button type='button' onClick={show} className='absolute flex text-lg top-10 left-96'> {showing ? <IoEyeOffOutline /> : <FaRegEye />  }
               
                </button>

              </div>

              <div class="mb-4 relative">
                <label className='block text-gray-700' for="password"> Confirm Password</label>
                <input 
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className='border-2 rounded-xl block w-full p-2 pl-10 text-gray-700'
                    type={showing? "password" : "text"} id="password" />
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                
                <button type='button' onClick={show} className='absolute flex text-lg top-10 left-96'> {showing ?  <IoEyeOffOutline /> : <FaRegEye />  }
               
                </button>
              </div>
              
              <button
              className=' hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl w-full '  style={{ background: "linear-gradient(to left, #ff0000, #0066ff)"}} >Sign Up</button>
          </form>

          <p className='text-sm my-5'>Already have an account, <Link to='/sign-in'><span className='text-green-800 font-semibold'>Log in</span></Link></p>


    </div>
  </div>

        
    </section>
  )
}
