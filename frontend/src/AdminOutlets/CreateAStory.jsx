import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {getDownloadURL, getStorage, ref,  uploadBytesResumable} from 'firebase/storage'
import { app } from '../firebase'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';



export default function CreateAStory() {
  const [file, setfile] = useState(null)
  const [imageUploadProgress, setimageUploadProgress] = useState(null)
  const [imageUploadError, setimageUploadError] = useState(null)
  const [publishError, setpublishError] = useState(null)
  const [formData, setformData] = useState({})

  const navigate = useNavigate()
 
  const handleUploadImage = async ()=>{
      try {
        if (!file){
          setimageUploadProgress(null)
          setimageUploadError('Please select an image')
          return
        }
        setimageUploadError(null)
        const storage = getStorage(app)
        const fileName = new Date().getTime() + '-' + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          'state_changed',
          (snapshot) =>{
            const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setimageUploadProgress(progress.toFixed(0));
          },
         
          (error) => {
            setimageUploadError('Image upload failed, , image size must be less than 2mb');
            setimageUploadProgress(null)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
              setimageUploadProgress(null);
              setimageUploadError(null)
              setformData({...formData, image: downloadURL});
            });
          }
        );
      } catch (error) {
        setimageUploadError('Image upload failed');
        setimageUploadProgress(null);
        console.log(error);
        
      }
  }

  const handleSubmit = async (e)=> {
    e.preventDefault();
    try {
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json()
      if (!res.ok) {
        setpublishError(data.message)
        return;
      }
    
      if (res.ok){
        setpublishError(null)
        navigate(`/post/${data.slug}`)
      }
    } catch (error) {
      setpublishError('Something went wrong')
      return
    }
  
  }
  return (
    <div>
      
      <div className='bg-[rgb(19,30,61)] h-20 text-gray-200 flex items-center justify-center flex-col'>
            <p className=' text-lg'>ADMIN Dashboard</p>
            <small>Home- Admin- Create-a-story</small>
      </div>
      
      <form className='px-1' onSubmit={handleSubmit} >
        <p className='text-center text-2xl font-semibold my-5 '>CREATE A STORY</p>
          <div>
              <label className='pe-3 font-semibold' htmlFor="title"> Title:</label>
              <input type="text" id='title' className='border-2 rounded-lg w-full p-2'
              onChange={(e)=> setformData({... formData, title: e.target.value})} />
          </div>
           <div className='mt-5'>
            <label htmlFor="genre" className='font-semibold'>Genre:</label>
              <select name="genre" class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e)=> setformData({... formData, genre: e.target.value})}>
              <option value="uncategorized" class="text-gray-700">Select a genre</option>
              <option value="drama" class="text-gray-700">Drama</option>
              <option value="prose" class="text-gray-700">Prose</option>
              <option value="poetry" class="text-gray-700">Poetry</option>
              </select>
           </div>

          

            <div className='mt-5'>
              <label htmlFor="category" className='font-semibold'>Categories:</label>
            <select name="category" class="block w-full px-3 py-2 mb-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e)=> setformData({... formData, category: e.target.value})}>
              <option value="uncategorized" class="text-gray-700">Select a category</option>
              <option value="biblical_stories" class="text-gray-700">Biblical Stories</option>
              <option value="science_fiction" class="text-gray-700">Science Fiction</option>
              <option value="mystery_thriller" class="text-gray-700">Mystery Thriller</option>
              <option value="historical_fiction" class="text-gray-700">Historical Fiction</option>
              <option value="adventure" class="text-gray-700">Adventure</option>
              <option value="biography" class="text-gray-700">Biography</option>
              <option value="children_stories" class="text-gray-700">Children Stories</option>
              <option value="literacy_fiction" class="text-gray-700">Literacy Fiction</option>
              <option value="humor" class="text-gray-700">Humor</option>
              <option value="non_fiction" class="text-gray-700">Non-Fiction</option>
            </select>

            </div>

              <label htmlFor="file" className='font-semibold'>Upload cover page of your story: </label>
            <div className='border-dotted py-2 my-3 bg-gray-400 rounded-xl flex justify-between items-center'>
              
              <input type="file" accept='image/*' className='p-2'
              onChange={(e)=> setfile(e.target.files[0])} />

              <button className='border px-2 py-2 rounded-xl bg-black text-white me-4'
               onClick={handleUploadImage} 
               disabled={imageUploadProgress}>
                {imageUploadProgress ?
                  ( <div className='w-16 h-16'>
                    <CircularProgressbar 
                     value={imageUploadProgress}
                     text={`${imageUploadProgress || 0 }%`} 
                    /> 
                  </div>
                  )
                  : ( 
                    'Upload Image' )
                }
                  </button>
           </div>
           {imageUploadError && <small className='text-red-600 italic my-5 bg-slate-100  rounded p-2'>{imageUploadError}</small>}
           


           <div className='mt-3'>
              <ReactQuill theme="snow" placeholder='Write something...'
              className='h-72 mb-12 '
              onChange={(value) => {
                setformData({ ...formData, content: value });
              }}/>
           </div>

           {
              formData.image && (
                <div>
                  <img src={formData.image}
                  alt= 'upload'
                  className='w-full h-72 object-contain' 
                  />
                </div>
              )
            }

           <button className='w-full bg-blue-950 text-white py-2 rounded-xl my-3'
          >PUBLISH</button>

{publishError && <small className='text-red-600 italic my-5 bg-slate-100  rounded p-2'>{publishError}</small>}

      </form>
      
      </div>
  )
}
 
