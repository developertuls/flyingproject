import React from 'react'
import { FaHandshake } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { SiHomeassistant } from "react-icons/si";
import { motion } from "motion/react";






export const Blog = () => {
  return (
    <div>
{/* flexdiv */}
<div className=" py-8 mt-[80px]  ">
  <h1 className="text-xl md:text-4xl font-bold text-center "><span>Empowering</span> You through <br />Real Estste <span className="text-[#209c7d]">Solutions.</span> </h1>
  
  
  
  <div className="transition-all duration-4.5 p-8 mt-4 md:mt-7 mx-auto container  grid md:grid-cols-3 justify-center items-center md:gap-x-4 gap-y-5">

    
   {/* flexBox-1 */} 
  <div className="w-[400px]  text-left p-9 shadow-md ">
   <p className="flex justify-between items-center text-xl md:text-3xl font-bold">
   <FcHome className="text-[#6D214F]"/>
   <span className="text-gray-400">o1</span>
   </p> 
   <h2 className="text-xl md:text-2xl font-semibold p-4">Find Your Dream Home</h2>
   <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto repudiandae tenetur totam sapiente officiis est </p>
  <button 
  className="transition-all duration-4.5   hover:bg-[#362ab9] w-full text-xl text-white font-semibold block bg-[#1B1464] mx-auto mt-9 px-7 py-2 rounded-full">
    Find Home
    </button>

 </div>






  {/* flexBox-2 */} 
  <motion.div
   initial={{ opacity: 0, y: -100 }}
   whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
   className=" transition-all duration-4.5 w-[400px]   text-left p-9 shadow-md">
   <p className="flex justify-between items-center text-xl md:text-3xl font-bold">
   <FaHandshake className="text-[#878383]"/>
   <span className="text-gray-400">o2</span>
   </p> 
   <h2 className="text-xl md:text-2xl font-semibold p-4">Builld Weaith with Ease.</h2>
   <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto repudiandae tenetur totam sapiente officiis est</p>
  <button className="hover:bg-[#166663] hover:text-white w-full text-xl font-semibold block bg-[#12CBC4] mx-auto mt-9 px-7 py-2 rounded-full">Find Home</button>

 </motion.div>





  {/* flexBox-3 */} 
  <div className="transition-all duration-4.5   w-[400px]  text-left p-9 shadow-md">
   <p className="flex justify-between items-center text-xl md:text-3xl font-bold">
   <SiHomeassistant className="text-[#6d6a6a]"/>
   <span className="text-gray-400">o3</span>
   </p> 
   <h2 className="text-xl md:text-2xl font-semibold p-4">Love Home style</h2>
   <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto repudiandae tenetur totam sapiente officiis est</p>
  <button
   className="hover:bg-[#2d239d] text-white w-full text-xl font-semibold block bg-[#1B1464] mx-auto mt-9 px-7 py-2 rounded-full">
    Find Home
    </button>

 </div>

















</div>
</div>







    </div>
  )
}
