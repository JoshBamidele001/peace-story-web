import React, {useState} from 'react'
import { FaSwatchbook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { IoEyeOffOutline } from "react-icons/io5";
import OAuth from '../Components/OAuth';

export default function SignUp() {
  const [showing, setshowing] = useState(false)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setloading] = useState('')
  const [ErrorMessage, setErrorMessage] = useState(null)
  const [formData, setformData] = useState({})
  const navigate = useNavigate()

  const show =()=>{
    {showing? setshowing(false): setshowing(true)}
    // setshowing(!showing)
}
const handlePasswordChange = (e) => {
  setformData({
    ...formData,
    [e.target.id] : e.target.value
 
  })
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

const handleChange = (e) =>{
  setformData({
    ...formData,
    [e.target.id] : e.target.value.trim()
      
  })
}

const handleSubmit = async (e)=>{
  e.preventDefault()
  if (!formData.name || !formData.email || !formData.password )
      return setErrorMessage ('Please fill out all fields.')
  try {
    setloading(true);
    const res = await fetch ('/api/auth/signup', {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false){
      setErrorMessage(data.message);
      setloading(false);
      return;
     }
    alert("Signup Successfully")
    navigate('/sign-in')
    setloading(false)
    setErrorMessage(null)
   

  } catch (error) {
    setloading(false)
    setErrorMessage(false)
    setErrorMessage(error.message)
    
  }

}

  return (
    <section className='w-screen relative  '>

  <div className="h-screen  flex justify-center items-center" style={{ background: "linear-gradient(to left, #d251ee, #000000)"}}>
    <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-md ">

        <Link to='/'>
              <div className='flex flex-col items-center justify-center gap-2 mt-10 mb-5  '>
              <div className='flex items-center justify-center gap-2'>
              <p className='text-xl'><FaSwatchbook /></p>
              <p className='text-base md:text-2xl lg:text-3xl font-semibold text-purple-800'> dphosPENS</p>
              </div>
              <small className='text-purple-900'>...lets help you bring out your story</small>
              </div>
        </Link>
        <hr />

          <form onSubmit={handleSubmit}>
              <h2 className='text-2xl text-center font-semibold mt-5 '>Sign Up</h2>

              {
                ErrorMessage && (
                  <p className="text-red-500 text-xs italic my-2">{ErrorMessage}</p>
                )
              }
              <div className="mb-4">
                <label className='block text-gray-700' htmlFor="name">Name</label>
                <input
                className='border-2 rounded-xl block w-full p-2 pl-10 text-gray-700' type="text" id="name" onChange={handleChange} />
              </div>
              <div className="mb-4">
                  <label className='block text-gray-700' htmlFor="email">Email</label>
                  <input
                  className='border-2 rounded-xl block w-full p-2 pl-10 text-gray-700' type="email" id="email" onChange={handleChange} />
              </div>
              <div className="mb-4 relative">
                <label className='block text-gray-700' htmlFor="password">Password</label>
                <input 
                  value={password}
                  onChange={handlePasswordChange}
                  className='border-2 rounded-xl block w-full p-2 pl-10 text-gray-700'
                  type={showing? "password" : "text"} id="password"  />
                  
                <button type='button' onClick={show} className='absolute flex text-lg top-10 left-60 md:top-10 md:left-96'> {showing ? <IoEyeOffOutline /> : <FaRegEye />  }
               
                </button>

              </div>

              <div className="mb-4 relative">
                <label className='block text-gray-700' htmlFor="password"> Confirm Password</label>
                <input 
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className='border-2 rounded-xl block w-full p-2 pl-10 text-gray-700'
                    type={showing? "password" : "text"} id="password" />
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                
                <button type='button' onClick={show} className='absolute flex text-lg  top-10 left-60 md:top-10 md:left-96 '> {showing ?  <IoEyeOffOutline /> : <FaRegEye />  }
               
                </button>
              </div>

              
              
              <button
              className=' hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl w-full '  style={{ background: "linear-gradient(to left, #000000,  #d251ee)"}} disabled={loading} >Sign Up</button>
          
        <OAuth/>
          
          
          </form>

          <p className='text-sm my-5'>Already have an account, <Link to='/sign-in'><span className='text-green-800 font-semibold'>Log in</span></Link></p>


    </div>
  </div>

        
    </section>
  )
}
