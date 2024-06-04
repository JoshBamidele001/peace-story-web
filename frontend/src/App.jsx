import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Read from './pages/Read';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Publish from './pages/Publish';
import Pricing from './pages/Pricing';
import WriteForYou from './pages/WriteForYou';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about_us' element= {<About/>} />
        <Route path='/read' element= {<Read/>} />
        <Route path='/sign-up' element= {<SignUp/>} />
        <Route path='/sign-in' element= {<SignIn/>} />
        <Route path='/publish' element= {<Publish/>} />
        <Route path='/pricing' element= {<Pricing/>} />
        <Route path='/lets-write-for-you' element= {<WriteForYou/>} />

        
      </Routes>
    </BrowserRouter>
  )
}
