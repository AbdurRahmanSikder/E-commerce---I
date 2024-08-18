import React, { useState } from 'react'
import loginIcons from "../assest/signin.gif"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom"
import imageToBase64 from '../helpers/imageToBase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';


const Signup = () => {

  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: ""
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.confirmPassword === data.password) {
      const dataResponse = await fetch(SummaryApi.signUp.url, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data)
      })

      const dataApi = await dataResponse.json();
      toast("Successfully register");
      navigate("/login");
      console.log(dataApi);
    }
    else{
      console.log("Password and confirm password not match");
    }

  }

  const handleOnClickPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageToBase64(file);
    setData((preve) => {
      return ({
        ...preve,
        profilePic: imagePic,
      })
    })

  }
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  return (
    <section id='signup'>
      <div className='mt-5 rounded-lg p-8 text-[20px] mx-auto w-[500px] bg-slate-100'>

        <div className='w-20 h-20 mx-auto rounded-full relative overflow-hidden'>
          <img src={data.profilePic || loginIcons} />
          <form >
            <label>
              <div className='text-[12px] cursor-pointer text-center bg-slate-300 bg-opacity-80  absolute top-9 py-1'>
                Upload photo
              </div>
              <input type='file' hidden onChange={handleOnClickPic} />
            </label>
          </form>
        </div>
        <form className='flex flex-col mt-8 gap-2' onSubmit={handleSubmit}>
          <label>Name: </label>
          <input onChange={handleOnChange} required name='name' value={data.name} type='text' className='border-[2px] px-4 outline-none' placeholder='Name' />
          <label>Email: </label>
          <input onChange={handleOnChange} required name='email' value={data.email} type='text' className='border-[2px] px-4 outline-none' placeholder='Email' />
          <label>Password:</label>
          <div className='flex items-center justify-center border-[2px] border-radius px-4 bg-white' >
            <input onChange={handleOnChange} required name='password' value={data.password} type={showPass ? "text" : "password"} className='w-full  outline-none' placeholder='Password' />
            <span className='cursor-pointer' onClick={() => setShowPass((showPass) => !showPass)}>
              {
                showPass ? (<FaEyeSlash />) : (<FaEye />)
              }
            </span>
          </div>
          <label>Confirm password:</label>
          <div className='flex items-center justify-center border-[2px] border-radius px-4 bg-white' >
            <input onChange={handleOnChange} required name='confirmPassword' value={data.confirmPassword} type={showPass ? "text" : "password"} className='w-full  outline-none' placeholder='Confirm password' />
            <span className='cursor-pointer' onClick={() => setShowPass((showPass) => !showPass)}>
              {
                showPass ? (<FaEyeSlash />) : (<FaEye />)
              }
            </span>
          </div>

          <button className='bg-red-500 py-2 px-4 rounded-md mt-4 text-white hover:bg-red-600'>
            Register
          </button>
        </form>
        <div className=''>
          <p className='text-[16px] mt-4'>Already have account ? <Link to={'/login'} className='underline text-red-600'>Login</Link>
          </p>
        </div>
      </div>
    </section >
  )
}

export default Signup