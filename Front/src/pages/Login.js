import React, { useState } from 'react'
import loginIcons from "../assest/signin.gif"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import SummaryApi from "../common"

const Login = () => {

  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(0);
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: "post",
      credentials : "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })

    const dataApi = await dataResponse.json();
    toast(dataApi.message);
    navigate("/");
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
  console.log(data);
  return (
    <section id='login'>
      <div className='mt-5 rounded-lg p-8 text-[20px] mx-auto w-[500px] bg-slate-100'>
        <div className='w - full mt-5'>
          <div className='w-20 h-20 mx-auto'>
            <img src={loginIcons} />
          </div>
        </div>
        <form className='flex flex-col mt-8 gap-2' onSubmit={handleSubmit}>
          <label>Email: </label>
          <input onChange={handleOnChange} name='email' value={data.email} type='text' className='border-[2px] px-4 outline-none' placeholder='Email' />
          <label>Password:</label>
          <div className='flex items-center justify-center border-[2px] border-radius px-4 bg-white' >
            <input onChange={handleOnChange} name='password' value={data.password} type={showPass ? "text" : "password"} className='w-full  outline-none' placeholder='Password' />
            <span className='cursor-pointer' onClick={() => setShowPass((showPass) => !showPass)}>
              {
                showPass ? (<FaEyeSlash />) : (<FaEye />)
              }
            </span>
          </div>
          <Link className='ml-auto hover:underline text-[16px] hover:text-red-800' to={'/forgot-password'}>Forget password</Link>
          <button className='bg-red-500 py-2 px-4 rounded-md mt-4 text-white hover:bg-red-600'>
            Login
          </button>
        </form>
        <div className=''>
          <p className='text-[16px] mt-4'>Don't have account <Link to={'/signup'} className='underline text-red-600'>signup</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login