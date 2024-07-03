import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {app} from '../firebase'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { updateUserStart, updateUserSuccess ,updateUserFailure } from '../redux/user/userSlice.js'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom'

export default function EditProfile() {
  const {currentUser} = useSelector(state => state.user)
  const [imagefile, setimagefile] = useState(null)
  const [filePerc, setfilePerc] = useState(0)
  const [imagefileUrl, setimagefileUrl] = useState()
  const [fileUploadError, setfileUploadError] = useState(false)
  const [formData, setformData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
    console.log(formData);


  const filePickerRef = useRef(null)
  const handleImageChange = (e) =>{
    setimagefile(e.target.files[0]); 
  }
;
     useEffect(()=>{
        if (imagefile){
            uploadImage()
        }
     }, [imagefile])

     const uploadImage = async ()=>{
        // service firebase.storage {
        //     match /b/{bucket}/o {
        //       match /{allPaths=**} {
        //         allow read;
        //         allow write: if 
        //         request.resource.size < 2 * 1024 * 1024 &&
        //               request.resource.contentType.matches('image/.*')
        //       }
        //     }
        //   }
        setfileUploadError(null)
        const storage = getStorage(app)
        const fileName = new Date().getTime() + imagefile.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, imagefile);

        uploadTask.on ('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setfilePerc(Math.round(progress))
        },
        (error) => {
            setfileUploadError('Error Image Upload (image must be less than 2mb)');
            setfilePerc(null)
            setimagefile(null)
            setimagefileUrl(null)
        },

        () => {
            getDownloadURL(uploadTask.snapshot.ref).then 
            ((downloadURL)=> {

                setimagefileUrl(downloadURL);
                setformData({...formData, avatar: downloadURL})
            }
            // setformData({...formData, avatar: downloadURL})
          );
        },
      );
     }

     const handleChange = (e) =>{
       
        setformData({...formData, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            dispatch(updateUserStart());
            const res = await fetch (`/api/user/update/${currentUser._id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),

            });
            const data = await res.json();
            if (data.success === false){
                dispatch (updateUserFailure(data.message));
                return
            } 
            dispatch (updateUserSuccess(data))
            alert("Updated successffully")
            navigate('/')
        } catch (error) {
            dispatch (updateUserFailure(error.message))
            
        }
    }

  return (
    <>

    <section>

      <p className='text-center lg:text-4xl font-semibold my-3'>EDIT PROFILE</p>
            <form onSubmit={handleSubmit} className='font-semibold'>

      <hr /> 

      <p className='text-center lg:text-2xl font-semibold mt-8 '>SECTION A: PROFILE PICTURE </p>
      <small className='text-center text-red-500 italic flex items-center justify-center mb-10'>You can change your profile picture at any time</small>

      <input type="file" accept='image/*'  onChange={handleImageChange} ref={filePickerRef} hidden />
        <div className='relative  flex flex-col justify-center items-center' onClick={()=>filePickerRef.current.click()}> 
                {filePerc && (
                    <CircularProgressbar value={filePerc || 0} text={`${filePerc}%`}
                    strokeWidth={5}
                    styles={{
                        root: {
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        },
                        path: {
                            stroke: `rgba(62, 152, 199, ${
                                filePerc / 100 
                            })`
                        }
                    }}
                    />
                )}  
               <img src={imagefileUrl || currentUser.avatar}
                className={`w-40 h-40 border-8 rounded-full ${filePerc && filePerc< 100 && 'opacity-60 '}`}
                 />
                 {fileUploadError &&
                 (

                    <small className='italic text-red-500 text-center '>{fileUploadError}</small>
                 )}
        </div>
                <div className='my-6'>

        <hr />
                </div>

      <p className='text-center lg:text-2xl font-semibold mt-8'>SECTION B: BIODATA</p>
      <small className='text-center text-red-500 italic flex items-center justify-center mb-10'>You can cupdate your biodata</small>


            <div className='grid grid-col grid-cols-1 sm:grid-cols-1 gap-2 md:grid-cols-2 '>
               
                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">Name</label>
                    <input
                        type="text"
                        name=""
                        id="name"
                        className="form-control py-2 rounded-lg px-2 border"
                        defaultValue={currentUser.name}
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">Email Address</label>
                    <input
                        type="text"
                        name=""
                        id="email"
                        defaultValue={currentUser.email}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">Phone</label>
                    <input
                        type="Number"
                        name=""
                        id="phone"
                        
                        defaultValue={currentUser.phone}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">Country</label>
                    <input
                        type="text"
                        name=""
                        id="country"
                        defaultValue={currentUser.country}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">Address</label>
                    <input
                        type="text"
                        name=""
                        id="address"
                        defaultValue={currentUser.address}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">State</label>
                    <input
                        type="text"
                        name=""
                        id="state"
                        defaultValue={currentUser.state}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col ">
                    <label htmlFor="" className="form-label">City</label>
                    <input
                        type="text"
                        name=""
                        id="city"
                        defaultValue={currentUser.city}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col ">
                    <label htmlFor="" className="form-label">Zip:</label>
                    <input
                        type="Number"
                        name=""
                        id="zip"
                        defaultValue={currentUser.zip}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-33 flex flex-col">
                    <label htmlFor="" className="form-label">Website</label>
                    <input
                        type="text"
                        name=""
                        id="website"
                        defaultValue={currentUser.website}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">Facebook</label>
                    <input
                        type="text"
                        name=""
                        id="facebook"
                        defaultValue={currentUser.facebook}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">Twitter</label>
                    <input
                        type="text"
                        name=""
                        id="twitter"
                        defaultValue={currentUser.twitter}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">Linkedin</label>
                    <input
                        type="text"
                        name=""
                        id="linkedin"
                        defaultValue={currentUser.linkedin}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">Instagram</label>
                    <input
                        type="text"
                        name=""
                        id="instagram"
                        defaultValue={currentUser.instagram}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>
                 
                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">Pinterest</label>
                    <input
                        type="text"
                        name=""
                        id="pinterest"
                        defaultValue={currentUser.pinterest}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="" className="form-label">Youtube</label>
                    <input
                        type="text"
                        name=""
                        id="youtube"
                        defaultValue={currentUser.youtube}
                        className="form-control py-2 rounded-lg px-2 border"
                        placeholder=""
                        aria-describedby="helpId"
                        onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                


            </div>

            <p className='text-center lg:text-2xl font-semibold mt-8'>SECTION C: GENRE and CATEGORIES</p>
            <small className='text-center text-red-500 italic flex items-center justify-center mb-10'>kindly select two or more from the genre and the categories</small>

            <div className=''>

            <div class="w-96 my-6 ">
                
                <label class="block text-sm font-medium text-gray-700 lg:text-xl">GENRE: </label>
                <div class="mt-2 space-y-2 grid grid-cols-3">
                    <div class="flex items-center">
                        <input id="drama"  type="checkbox" value="drama" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        defaultChecked={true}
                       onChange={handleChange}
                        />
                        <label for="drama" class="ml-3 block text-sm font-medium text-gray-700">
                            Drama
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="prose"  type="checkbox" value="prose" 
                        defaultChecked={true}
                         class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded "
                        onChange={handleChange}/>
                        <label for="pose" class="ml-3 block text-sm font-medium text-gray-700">
                            Prose
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="poetry"  type="checkbox" value="poetry" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" 
                        defaultChecked = {false} 
                        onChange={handleChange}/>
                        <label for="poetry" class="ml-3 block text-sm font-medium text-gray-700">
                            Poetry
                        </label>
                    </div>
                </div>

            </div>             

        
            <div className=''>
            <label for="categories" class="block text-sm font-medium text-gray-700 lg:text-xl">CATEGORIES:</label>
                <div class="mt-2 space-y-2 w-full grid grid-cols-3">
                    <div class="flex items-center">
                        <input id="biblical_stories" name="categories" type="checkbox" value="biblical_stories" 
                        defaultChecked={true}
                        onChange={handleChange}class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                        <label for="biblical_stories" class="ml-3 block text-sm font-medium text-gray-700">
                            Biblical Stories
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="science_fiction" name="categories" type="checkbox" value="science_fiction" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        defaultChecked={false}
                        onChange={handleChange}/>
                        <label for="science_fiction" class="ml-3 block text-sm font-medium text-gray-700">
                            Science Fiction
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="mystery_thriller" name="categories" type="checkbox" value="mystery_thriller" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                       defaultChecked={false}
                        onChange={handleChange}/>
                        <label for="mystery_thriller" class="ml-3 block text-sm font-medium text-gray-700">
                            Mystery Thriller
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="historical_fiction" name="categories" type="checkbox" value="historical_fiction" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        defaultChecked={false}
                        onChange={handleChange}/>
                        <label for="historical_fiction" class="ml-3 block text-sm font-medium text-gray-700">
                            Historical Fiction
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="adventure" name="categories" type="checkbox" value="adventure" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        defaultChecked={false}
                        onChange={handleChange}/>
                        <label for="adventure" class="ml-3 block text-sm font-medium text-gray-700">
                            Adventure
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="biography" name="categories" type="checkbox" value="biography" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        defaultChecked={false}
                        onChange={handleChange}/>
                        <label for="biography" class="ml-3 block text-sm font-medium text-gray-700">
                            Biography
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="children_stories" name="categories" type="checkbox" value="children_stories" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        defaultChecked={false}
                        onChange={handleChange}/>
                        <label for="children_stories" class="ml-3 block text-sm font-medium text-gray-700">
                            Children Stories
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="literacy_fiction" name="categories" type="checkbox" value="literacy_fiction" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        defaultChecked={true}
                        onChange={handleChange}/>
                        <label for="literacy_fiction" class="ml-3 block text-sm font-medium text-gray-700">
                            Literary Fiction
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="humor" name="categories" type="checkbox" value="humor" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        defaultChecked={false}
                        onChange={handleChange}/>
                        <label for="humor" class="ml-3 block text-sm font-medium text-gray-700">
                            Humor
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="non_fiction" name="categories" type="checkbox" value="non_fiction" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        defaultChecked={false}
                        onChange={handleChange}/>
                        <label for="non_fiction" class="ml-3 block text-sm font-medium text-gray-700">
                            Non-fiction
                        </label>
                    </div>
                </div>
            </div>
            </div>
            

            <button  className='bg-blue-600 hover:bg-opacity-70 px-4 py-2 mt-5 text-center w-full rounded-lg'>Update</button>

            </form>


        </section>


    </>
  )
}
