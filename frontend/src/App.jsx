import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Read from './pages/Read';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Publish from './pages/Publish';
import WriteForYou from './pages/WriteForYou';
import Dashboard from './pages/Dashboard';
import AllProfile from './DashboardOutlet/AllProfile';
import EditProfile from './DashboardOutlet/EditProfile';
import MyLibrary from './DashboardOutlet/MyLibrary';
import AddBookListing from './DashboardOutlet/AddBookListing';
import Privateroutes from './pages/PrivateRoutes';
import SavedBooks from './DashboardOutlet/SavedBooks';



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
        <Route path='/lets-write-for-you' element= {<WriteForYou/>} />

        <Route element={<Privateroutes/>}>
              <Route path='/dashboard' element={<Dashboard/>}> 
                  <Route path='/dashboard' element={<AllProfile/>} />
                  <Route path='/dashboard/edit_profile' element={<EditProfile/>} />
                  <Route path='/dashboard/my_library' element={<MyLibrary/>} />
                  <Route path='/dashboard/add_book_listing' element={<AddBookListing/>} />
                  <Route path='/dashboard/saved_books' element={<SavedBooks/>} />

              

              </Route>
          </Route>

        
      </Routes>
    </BrowserRouter>
  )
}
