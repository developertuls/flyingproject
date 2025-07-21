
import React, { useState } from 'react'
import { FaBars} from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";








const Nebver = () => {

const [isopen ,setIsopen]=useState(false)

const toggolMenu=()=>{

setIsopen(!isopen)

}





  return (
<nav className='bg-[#fff] py-4 md:py-6  fixed top-0 w-full z-50 shadow-md'>


  {/* Desktopmenu */}
  <div className='container mx-auto flex justify-between items-center'>
   <div>
    <h3 className='logo-animet'>
      <span className='font-semibold md:text-4xl'>Y</span>
      <span className='font-semibold md:text-4xl'>H</span>
      <span className='font-semibold md:text-4xl'>S</span>
      <span className='font-semibold md:text-4xl'>L</span>
      <span className='font-semibold md:text-4xl'>F</span>
      </h3>
   </div>

   {/* mobilemenu=Button */}
<div className='md:hidden'>
  <button onClick={toggolMenu}>

    {
      isopen ? <IoMdClose size={24} />:<FaBars size={22} />
    }
  </button>
</div>

    <ul className='text-text md:text-2xl hidden md:flex gap-x-4 md:gap-x-6'>
      <li>BOOKING</li>
      <li>CONTACT</li>
      <li>BLOGS</li>
      <li>LIKE HOME</li>
     
    </ul>
    <button className='bg-[#2bcbba] px-6 py-2 md:text-2xl hidden md:block'>Login</button>

{/* mobile menu collapsed */}
<div className={` md:hidden w-full absolute top-full left-0 transition-all duration-300 ease-in-out  ${isopen ?'block max-h-[500px] ':'hidden max-h-0'}`}>
  <ul className='flex flex-col items-center bg-blue-500 py-4'>
      <li>Booking</li>
      <li>Contact</li>
      <li>Blogs</li>
      <li>Likehome</li>
      <li> <button className='bg-[red]'>Login</button></li>
   
    </ul>
</div>

  </div>
</nav>
  )
}

export default Nebver