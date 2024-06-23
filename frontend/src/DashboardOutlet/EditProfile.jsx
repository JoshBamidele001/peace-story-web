import React from 'react'
import { useSelector } from 'react-redux'

export default function EditProfile() {
  const {currentUser} = useSelector(state => state.user)

  return (
    <>

    <section>

      <p className='text-center lg:text-4xl font-semibold my-3'>EDIT PROFILE</p>

      <hr /> 

      <p className='text-center lg:text-2xl font-semibold my-8'>SECTION A: BIODATA</p>

            <form  className='font-semibold'>

            <div className='grid grid-col grid-cols-1 sm:grid-cols-1 gap-2 md:grid-cols-2'>
               
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
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
                        // onChange={handleChange}
                    />
                    {/* <small id="helpId" className="text-muted"></small> */}
                </div>

                


            </div>

            <p className='text-center lg:text-2xl font-semibold my-8'>SECTION B: TECHNICAL INFO</p>

            <button  className='bg-blue-600 hover:bg-opacity-70 px-4 py-2 mt-3 rounded-lg'>Update</button>

            </form>


        </section>


    </>
  )
}
