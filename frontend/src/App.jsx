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
import PrivateRoutes from './pages/PrivateRoutes';
import SavedBooks from './DashboardOutlet/SavedBooks';
import OnlyAdminPrivateRoutes from './pages/OnlyAdminPrivateRoutes';
import Admin from './pages/Admin';
import DashboardSummary from './AdminOutlets/DashboardSummary';
import AllPosts from './AdminOutlets/AllPosts';
import Setting from './AdminOutlets/Setting';
import Error404 from './AdminOutlets/Error404';
import Table from './AdminOutlets/Table';
import CreateAStory from './AdminOutlets/CreateAStory';
import UpdatePost from './AdminOutlets/UpdatePost';
import UsersDashboard from './AdminOutlets/UserProfile';



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

        <Route element={<PrivateRoutes/>}>
              <Route path='/dashboard' element={<Dashboard/>}> 
                  
                  <Route path='/dashboard' element={<AllProfile/>} />
                  <Route path='/dashboard/edit_profile' element={<EditProfile/>} />
                  <Route path='/dashboard/my_library' element={<MyLibrary/>} />
                  <Route path='/dashboard/add_book_listing' element={<AddBookListing/>} />
                  <Route path='/dashboard/saved_books' element={<SavedBooks/>} />        

              </Route>
          </Route>

          <Route element={<OnlyAdminPrivateRoutes/>}>
          <Route path='/ad_min' element={<Admin/>}>
              <Route path='/ad_min' element={<DashboardSummary/>} />
              <Route path='/ad_min/create_post' element={<CreateAStory/>} />
              <Route path='/ad_min/all_posts' element={<AllPosts/>} />
              <Route path='/ad_min/user_profile' element={<UsersDashboard/>} />
              <Route path='/ad_min/setting' element={<Setting/>} />
              <Route path='/ad_min/error' element={<Error404/>} />
              <Route path='/ad_min/table_list' element={<Table/>} />
              <Route path='/ad_min/update-post/:postId' element={<UpdatePost/>} />
          </Route> 
             
          </Route>

        
      </Routes>
    </BrowserRouter>
  )
}
