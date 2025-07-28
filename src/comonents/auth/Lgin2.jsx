

import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";


export const Lgin2 = () => {
 
const [showpass,setShowpass]=useState(false)















  return (
    <div className="flex justify-center items-center bg-[green] h-[90vh] mt-[99px]">
      <div className=" bg-white max-w-lg p-5">
        <h2 className="text-black font-bold text-center text-2xl mb-6">Login</h2>
        <form className="space-y-4 bg-[#1B1464]/20">
          <input
           type="email"
           className="w-full border outline-none px-4 py-2 rounded focus:ring-2 focus:ring-[#e67e22]"
           placeholder="Yor Email"
            name="" 
            id="" 
            required
            />



          {/* onlypassword   */}

<div className="relative flex items-center ">
 <input
 className="w-full border outline-none px-4 py-2 rounded focus:ring-2 focus:ring-[#e67e22]" 
type={showpass ? 'text' :'password'}
placeholder="Your Password"
name=""
id="" 
required
 />

{
  showpass ?<IoMdEyeOff onClick={()=>setShowpass(!showpass)} className="text-[red] absolute right-2 cursor-pointer"/>:<FaRegEye onClick={()=>setShowpass(!showpass)} className="text-[red] absolute right-2 cursor-pointer"/>
}


















</div>
 

<div className='flex items-center justify-between'>
<p>
  <input
   type="checkBox"
   name=''
   id='checkBox'
    />
    <label htmlFor="checkBox">Accept trems & <Link className='text-[green] hover:underline underline-offset-4'>condition</Link> </label>
</p>


  <p
   className='hover:text-[#30ac30] hover:underline underline-offset-4  text-right   text-xl hover:cursor-pointer'>
           Forgot Password
      
</p>
</div>



        <button
        type="submit"
         className="w-full   bg-[#00d2d3] hover:bg-[#1d6d6d] py-2 px-6 text-lg md:text-2xl font-semibold rounded cursor-pointer">
          Login
        </button>

        </form>

{/* divider */}
<div className="flex items-center my-6">
  <div className="flex-grow h-px bg-[red] "></div>
  <span className="text-[red] mx-4">OR</span>
  <div className="flex-grow h-px bg-[red]"></div>
</div>








<div className="text-black flex flex-col space-y-3 mt-3">
<button className=" py-2 px-6 bg-[#fff] hover:bg-[#dddada] rounded flex justify-center items-center gap-x-2">
  Login with Goolgle <FcGoogle className='text-xl'/> 
</button>



<button className=" py-2 px-6 bg-[#fff] hover:bg-[#dddada] rounded flex justify-center items-center gap-x-2">
  Login with GitHub <IoLogoGithub className='text-xl'/>
</button>

</div>


<div className="text-black">
     <p className='text-lg mt-4 pb-8 text-center '>Don't have an account? 
             <Link to={'/Reagister'}

           className='hover:underline text-[#3fe23f] underline-offset-4 hover:font-semibold'> Reagister Here
           </Link></p>
</div>








      </div>
    </div>
  )
}
