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
import Table from './AdminOutlets/AllComments';
import CreateAStory from './AdminOutlets/CreateAStory';
import UpdatePost from './AdminOutlets/UpdatePost';
import UsersDashboard from './AdminOutlets/UserProfile';
import PostPage from './pages/PostPage';
import ReadAPost from './pages/ReadAPost';
import ScrollToTop from './Components/ScrollToTop';
import AdminDashboard from './AdminOutlets/AdminDashboard';



export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about-us' element= {<About/>} />
        <Route path='/read' element= {<Read/>} />
        <Route path='/sign-up' element= {<SignUp/>} />
        <Route path='/sign-in' element= {<SignIn/>} />
        <Route path='/publish' element= {<Publish/>} />
        <Route path='/lets-write-for-you' element= {<WriteForYou/>} />
        <Route path='/post/:postSlug' element= {<PostPage/>} />

        <Route element={<PrivateRoutes/>}>
          <Route path='/post/read/:postSlug' element={<ReadAPost/>} />      
              <Route path='/dashboard' element={<Dashboard/>}> 
                  
                  <Route path='/dashboard' element={<AllProfile/>} />
                  <Route path='/dashboard/edit-profile' element={<EditProfile/>} />
                  <Route path='/dashboard/my-library' element={<MyLibrary/>} />
                  <Route path='/dashboard/add-book-listing' element={<AddBookListing/>} />
                  <Route path='/dashboard/saved-books' element={<SavedBooks/>} />        
                    

              </Route>
          </Route>

          <Route element={<OnlyAdminPrivateRoutes/>}>
          <Route path='/admin' element={<Admin/>}>
              <Route path='/admin' element={<AdminDashboard/>} />
              <Route path='/admin/create-post' element={<CreateAStory/>} />
              <Route path='/admin/all-posts' element={<AllPosts/>} />
              <Route path='/admin/user-profile' element={<UsersDashboard/>} />
              <Route path='/admin/setting' element={<Setting/>} />
              <Route path='/admin/error' element={<Error404/>} />
              <Route path='/admin/all-comments' element={<Table/>} />
              <Route path='/admin/update-post/:postId' element={<UpdatePost/>} />
          </Route> 
             
          </Route>

        
      </Routes>
    </BrowserRouter>
  )
}
