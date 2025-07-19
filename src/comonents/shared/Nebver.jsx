


import { MdOutlineOtherHouses } from "react-icons/md";







export const Nebver = () => {
  return (

    // ======navber===========//
    <div>
   <nav className="bgg text-white h-screen">
    <div className="w-[95%] flex justify-between items-center  border-red-500">

       {/* navber-image */}
  <img className="w-[4%] bg-[#fff] rounded-full"
   src="images/house.png"
    alt="navimages" /> 
    
    
    <ul className="block  md:p-8 sm:p-7 md:flex  md:gap-x-8 sm:gap-x-7  md:text-3xl sm:text-2xl font-medium">
      <li className="">Like Home</li>
      <li>Booking </li>
      <li>Contact</li>
      <li>Home Blogs</li>
        <button className="bg-[#ff4757] rounded-sm md:px-3 md:py-1">Login</button>
    </ul>

  
    </div>

<div className="md:w-1/2 text-center">
    <h1 className="text-[#fff]  md:mt-[160px] md:text-8xl text-2xl">Your life style <br /> home</h1>
</div>


   </nav>





</div>
  )
}
