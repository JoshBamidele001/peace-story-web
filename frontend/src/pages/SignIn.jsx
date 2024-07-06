import React, {useState} from 'react'
import { FaSwatchbook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { IoEyeOffOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice'
import OAuth from '../Components/OAuth';

export default function SignIp() {
  const [showing, setshowing] = useState(false)
  const [password, setPassword] = useState('');
  const {loading, error: ErrorMessage } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [formData, setformData] = useState({})
  const navigate = useNavigate()

  const show =()=>{
    {showing? setshowing(false): setshowing(true)}
    // setshowing(!showing)
}



const handleChange = (e) =>{
  setformData({
    ...formData,
    [e.target.id] : e.target.value.trim()
      
  })
}

const handleSubmit = async (e)=>{
  e.preventDefault()
  if ( !formData.email || !formData.password ){
      return dispatch (signInFailure ('Please fill out all fields.'))
}
  try {
    dispatch(signInStart())
    const res = await fetch ('/api/auth/signin', {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false){
      dispatch(signInFailure(data.message))
     }
    
    if (res.ok) {
      dispatch(signInSuccess(data))
      alert("Signin Successfully")
      navigate('/')
     
      
    }
   

  } catch (error) {
   dispatch(signInFailure(error.message))
    
  }

}

  return (
    <section className='w-screen relative  '>

  <div className="h-screen  flex justify-center items-center" style={{ background: "linear-gradient(to left, #0066ff, #ff0000)"}}>
    <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-md">

        <Link to='/'>
              <div className='flex flex-col items-center justify-center gap-2 mt-10 mb-5 '>
              <div className='flex items-center justify-center gap-2'>
              <p className='text-xl'><FaSwatchbook /></p>
              <p className='text-base md:text-2xl lg:text-3xl font-semibold'> dphosPENS</p>
              </div>
              <small>...lets help you bring out your story</small>
              </div>
        </Link>
        <hr />

          <form onSubmit={handleSubmit}>
              <h2 className='text-2xl text-center font-semibold mt-5 '>Sign In</h2>

              {
                ErrorMessage && (
                  <p className="text-red-500 text-xs italic my-2">{ErrorMessage}</p>
                )
              }
            
              <div className="mb-4">
                  <label className='block text-gray-700' htmlFor="email">Email</label>
                  <input
                  className='border-2 rounded-xl block w-full p-2 pl-10 text-gray-700' type="email" id="email" onChange={handleChange} />
              </div>
              <div className="mb-4 relative">
                <label className='block text-gray-700' htmlFor="password">Password</label>
                <input 
                  
                  onChange={handleChange}
                  className='border-2 rounded-xl block w-full p-2 pl-10 text-gray-700'
                  type={showing? "password" : "text"} id="password"  />
                  
                <button type='button' onClick={show} className='absolute flex text-lg top-10 left-60 md:top-10 md:left-96'> {showing ? <IoEyeOffOutline /> : <FaRegEye />  }
               
                </button>

              </div>

              

              
              
              <button
              className=' hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl w-full '  style={{ background: "linear-gradient(to left, #ff0000, #0066ff)"}}  >Sign In </button>

              <OAuth/>
          
          
          </form>

          <p className='text-sm my-5'>Dont have an account, <Link to='/sign-up'><span className='text-green-800 font-semibold'>Sign up</span></Link></p>


    </div>
  </div>

        
    </section>
  )
}
