

import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { motion } from "motion/react";
import { auth } from "../../firbease/firbease.config";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";











export const Lgin2 = () => {


const [showpass,setShowpass]=useState(false)




const hendelsubmit=(e)=>{
  e.preventDefault()

  const email= e.target.email.value;
  const password= e.target.password.value;
 
signInWithEmailAndPassword(auth,email,password)
  
  .then(result=>{
const user=result.user;
console.log(user)
  })
  .catch(err=>{
    console.error(err);
  })

 
  
}










  return (
    <div className=" relative  flex justify-center items-center bg-[green] h-[100vh] mt-[99px]"
    style={{
      backgroundImage:"url(https://plus.unsplash.com/premium_photo-1661963505505-f992fa0a8630?q=80&w=1294&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    }}
    >



      <motion.div
       initial={{ opacity: 0, x: 100 }} // 
       whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.9, ease: "easeOut" }}
         viewport={{ once: true }}
       className="bgg relative md:w-[35%] p-5 bg-[#0e0a32]/60 ">
        <div className=" bg-black bg-opacity-60 "></div>
        <h2 className="text-white font-bold text-center md:text-3xl mb-6 text-2xl">Login</h2>
        <form onSubmit={hendelsubmit} className="space-y-4">
          <input
        
           type="email"

           className="w-full border outline-none px-4 py-3 placeholder:text-xl rounded focus:ring-2 focus:ring-[#e67e22]"
           placeholder="Yor Email"
            name="email" 
            id="" 
            
            required
            />



          {/* onlypassword   */}

<div className="relative flex items-center ">
 <input
 className="w-full border outline-none px-4 py-3 placeholder:text-xl rounded focus:ring-2 focus:ring-[#e67e22]" 
type={showpass ? 'text' :'password'}
placeholder="Your Password"
name="password"
id="" 

required
 />

{
  showpass ?<IoMdEyeOff onClick={()=>setShowpass(!showpass)} className="text-[#cec8c8] absolute right-2 cursor-pointer text-2xl"/>:<FaRegEye onClick={()=>setShowpass(!showpass)} className="text-[#cec8c8] absolute right-2 cursor-pointer text-2xl"/>
}


















</div>
 

<div className='flex items-center justify-between'>
<p>
  <input
   type="checkBox"
   name=''
   id='checkBox'
    />
    <label htmlFor="checkBox" className="text-white">Accept trems & <Link className='text-[#2cfa2c] hover:underline underline-offset-4'>condition</Link> </label>
</p>


  <p
   className='hover:text-[#4dfb4d] hover:underline underline-offset-4 text-white text-right   text-xl hover:cursor-pointer'>
           Forgot Password
      
</p>
</div>



        <button
        type="submit"
         className="w-full text-white   bg-[#00d2d3] hover:bg-[#1d6d6d] py-2 px-6 text-lg md:text-2xl font-semibold rounded cursor-pointer">
          Login
        </button>

        </form>

{/* divider */}
<div className="flex items-center my-6">
  <div className="flex-grow h-px bg-[#e7e5e5] "></div>
  <span className="text-[#e7e5e5] mx-4">OR</span>
  <div className="flex-grow h-px bg-[#e7e5e5]"></div>
</div>








<div className="text-black flex flex-col space-y-3 mt-3  ">
<button className=" py-2 px-6 bg-[#fff] hover:bg-[#dddada] rounded flex justify-center items-center gap-x-2 text-xl">
  Login with Goolgle <FcGoogle className='text-3xl'/> 
</button>



<button className=" py-2 px-6 bg-[#fff] hover:bg-[#dddada] rounded flex justify-center items-center gap-x-2 text-xl">
  Login with GitHub <IoLogoGithub className='text-3xl'/>
</button>

</div>


<div className="text-white ">
     <p className='text-lg mt-4 pb-8 text-center '>Don't have an account? 
             <Link to={'/Reagister'}

           className='hover:underline text-[#3fe23f] underline-offset-4 hover:font-semibold'> Reagister Here
           </Link></p>
</div>








      </motion.div>
    </div>
  )
}
