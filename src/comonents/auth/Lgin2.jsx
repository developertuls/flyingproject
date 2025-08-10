

import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { motion } from "motion/react";
import { auth } from "../../firbease/firbease.config";
import {  signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";











export const Lgin2 = () => {

const navigaet=useNavigate()
const [errormsg,setErrormsg]=useState('')
const [successmsg,setSuccessmsg]=useState('')
const goolgleProvider=new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
const [showpass,setShowpass]=useState(false)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;



const hendelsubmit=(e)=>{
  e.preventDefault()

  const email= e.target.email.value;
  const password= e.target.password.value;
 if(!passwordRegex.test(password)){
setErrormsg("Must contain at least one uppercase, one lowercase, one number, one special character and be at least 6 characters long");
return;
}
signInWithEmailAndPassword(auth,email,password)
  
 .then(result=>{
const user=result.user;
console.log(user)
setErrormsg('');
e.target.reset();

Swal.fire({
  title: "Good job!",
  text: "Your Reagister success!",
  icon: "success"
});


setTimeout(()=>{
  setSuccessmsg('')
navigaet('/booking')
},2000);

 })

  .then(result=>{
const user=result.user;
console.log(user)
  })
  .catch(err=>{
    console.error(err);
  })

 









  
}



// goolgleBtn
const goolgleBtn=()=>{
signInWithPopup(auth,goolgleProvider) 
 .then(result=>{
const userinfo=result.user;
  console.log(userinfo)

 Swal.fire({ 
  title: "Good job!",
  text: "Your Login success!",
  icon: "success"
}); 

setTimeout(()=>{
  setSuccessmsg('')
navigaet('/booking')
},2000);

 })
 .catch(err=>{
  console.error(err);
 })
}




// GitHubBtn
const GitHubeBtn=()=>{
signInWithPopup(auth,githubProvider)
.then(result=>{
const userinfo=result.user;
console.log(userinfo)

 Swal.fire({
  title: "Good job!",
  text: "Your Login success!",
  icon: "success"
}); 
setTimeout(()=>{
  setSuccessmsg('')
navigaet('/booking')
},2000);

})

}













  return (
    <div className=" relative  overflow-hidden flex justify-center items-center  md:mt-[99px] md:h-[100vh] mt-[66px]"
    style={{
      backgroundImage:"url(https://plusnsplash.com/premium_photo-1661963505505-f992fa0a8630?q=80&w=1294&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    }}
    >



      <motion.div
       initial={{ opacity: 0, x: 100 }} // 
       whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.9, ease: "easeOut" }}
         viewport={{ once: true }}
       className="bgg relative md:w-[35%] p-5 bg-[#0e0a32]/70 ">
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
 {
    errormsg && <sp className="text-[red] text-center justify-center animate-bounce">{errormsg}</sp>
  }   

  {
    successmsg && <sp className="text-[#2acb2a] text-xl text-center justify-center animate-bounce">{successmsg}</sp>
  } 











<div className='flex items-center justify-between'>
<p>
  <input
   type="checkBox"
   name=''
   id='checkBox'
   required
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
<button onClick={goolgleBtn} className=" py-2 px-6 bg-[#fff] hover:bg-[#dddada] rounded flex justify-center items-center gap-x-2 text-xl">
  Login with Goolgle <FcGoogle className='text-3xl'/> 
</button>



<button onClick={GitHubeBtn} className=" py-2 px-6 bg-[#fff] hover:bg-[#dddada] rounded flex justify-center items-center gap-x-2 text-xl">
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
