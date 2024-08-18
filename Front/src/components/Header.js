import React from 'react'
import Logo from "./Logo"
import { BiSearch } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='h-16 shadow-md'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={'/'}>
            <Logo w={90} h={50} />
          </Link>
        </div>
        <div className=' hidden md:flex
        h-8 border-[2px] w-[300px] flex items-center rounded-full overflow-hidden'>
          <input type='text' className=' w-full h-full  pl-4 flex items-center outline-none focus-within:shadow-md' placeholder='search product here' />
          <div className=' text-lg h-full min-w-[50px] text-white bg-red-600 flex justify-center items-center cursor-pointer'>
            <BiSearch />
          </div>
        </div>

        <div className='flex gap-4 items-center' >
          <div className='text-3xl cursor-pointer'>
            <FaRegCircleUser />
          </div>
          <div className='text-2xl relative'>
            <div className='  text-white h-5 w-5 rounded-full flex justify-center items-center bg-red-600 absolute bottom-4  left-4'>
              <p className=' text-[12px]'>0</p>
            </div>
            <span className='cursor-pointer'>
              <FaShoppingCart />
            </span>
          </div>
          <div>
            <Link to={'/login'}>
              <button className='px-4 py-1 bg-red-600 rounded-full text-white hover:bg-red-700 ml-4'>Login</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header