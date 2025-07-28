







import  { useState } from 'react'
import { motion } from 'motion/react'
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";







export const Reagister = () => {


const [showpass,setShowpass]=useState(false)
const [showconpass,setShowconpass]=useState(false)













  return (
//      <div className='bgg  mt-[70px] bg-[green] relativ md:mt-[100px] overflow-hidden'style={{
//       backgroundImage:"url(https://plus.unsplash.com/premium_photo-1661963505505-f992fa0a8630?q=80&w=1294&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
//     }}>
//       {/* <div className="absolute inset-0 bg-black bg-opacity-60 mt-9  md:h-[804px]"></div> */}
//  <motion.div
//         initial={{ opacity: 0, y: 100 }} // 
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         viewport={{ once: true }}
//          className="mx-auto relative w-full md:w-1/2 h-[700px] md:h-[700px] overflow-hidden">
//           <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//           <form  onSubmit={handleSubmit} className="  absolute inset-0 bg-[#1B1464]/20 text-white text-center flex flex-col justify-center items-center px-4">
//             <h2 className="text-2xl md:text-3xl mb-6  mt-4 ">Get Reagister</h2>

//             <input
//             onChange={(e) => setName(e.target.value)}
//               className="input-bg w-[70%] p-3  placeholder:text-2xl  text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
//               type="text" name="name" placeholder="Your Full name"
//               value={name}
//             required/>



//             <input
//              onChange={(e) => setEmail(e.target.value)}
//               className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
//               type="email" name="email" placeholder="Your Email"
//               value={email}
//             required/>


//             <input
//              onChange={(e) => setPassword(e.target.value)}
//               className="input-bg  w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
//               type="password" name="password" placeholder="Your Password"
//               value={password}
//             required/>

       





//             <input
//              onChange={(e) => setConfrem(e.target.value)}
//               className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
//               type="password" name="password" placeholder="Your Confirm password"
//               value={confrem}
//             required/>






//       <span className='hover:text-[#30ac30] hover:underline underline-offset-4  text-left md:ml-[275px]  text-xl hover:cursor-pointer'>
//            Forgot Password
//         </span>
          

          



// <button
// onClick={()=>submitColor(submiCplor)}

//   type="submit"
//   className={`${submiCplor ?'bg-[red] py-2 px-6 text-lg md:text-2xl font-semibold w-[70%]':' bg-[#00d2d3] hover:bg-[#1d6d6d] mt-4 py-2 px-6 text-lg md:text-2xl font-semibold w-[70%]'}`}>
//   Submit
// </button>


// {/* Divider */}
// <div className='flex justify-between  items-center md:w-[70%] w-[60%]  gap-x-3'>
// <hr className='border border-[#ebeaea] block md:w-[80%] w-[70%] mt-9'/>
// <span className='block text-xl mt-7 md:mt-6 '>OR</span>
// <hr className='border border-[#ebeaea] block md:w-[80%] w-[70%] mt-9'/>
// </div>
// {/* Login google,github,email teh div */}
  
//  <button
//    className=" py-2 px-6 bg-[#fff] hover:bg-[#dddada] w-[70%] mt-9 flex gap-x-2  md:text-xl justify-center items-center font-semibold text-black">
//             <FcGoogle className='text-xl'/> Reagister with Goolgle
//           </button>
//           <button
//            className="py-2 px-6 bg-[#fff] hover:bg-[#dddada]  w-[70%] mt-3 flex gap-x-3 md:text-xl justify-center items-center font-semibold text-black" 
//           >
//           <IoLogoGithub className='text-xl'/>Reagister with GitHub
//           </button>
//           <p className='text-lg mt-4 pb-8'>Already have an account? 
//              <Link to={'/login'}

//            className='hover:underline text-[#3fe23f] underline-offset-4 hover:font-semibold'>Login Now
//            </Link></p>

  
//           </form>
//         </motion.div>


    
//     </div>

<div className="flex justify-center items-center bg-[green] h-[100vh] mt-[170px]">
      <div className=" bg-white max-w-lg p-5">
        <h2 className="text-black font-bold text-center text-2xl mb-6">Reagister</h2>
        <form className="space-y-4 bg-[#1B1464]/20">
          <input
           type="text"
           className="w-full border outline-none px-4 py-2 rounded focus:ring-2 focus:ring-[#e67e22]"
           placeholder="Yor Full Name"
            name="name" 
            id=""
            required
             />



          <input
           type="email"
           className="w-full border outline-none px-4 py-2 rounded focus:ring-2 focus:ring-[#e67e22]"
           placeholder="Yor Email"
            name="" 
            id=""
            required
             />



     {/* onlypassword */}

     <div className='relative flex items-center '>
<input
           type={showpass ?'text' :'password'}
           className="w-full border outline-none px-4 py-2 rounded focus:ring-2 focus:ring-[#e67e22]"
           placeholder="Your Password"
            name=""
             id=""
             required
              />

{showpass ? <IoMdEyeOff  onClick={()=>setShowpass(!showpass)}  className='text-[red] absolute right-2 cursor-pointer'/>:<FaRegEye onClick={()=>setShowpass(!showpass)} className="text-[red] absolute right-2 cursor-pointer"/>
}



     </div>
          

<div className='relative flex items-center'>

 <input
           type={showconpass?'text' :'password'}
           className="w-full border outline-none px-4 py-2 rounded focus:ring-2 focus:ring-[#e67e22]"
           placeholder="Your Confrim Password"
            name=""
             id="" 
             required
             />

{showconpass ? <IoMdEyeOff onClick={()=>setShowconpass(!showconpass)} className='text-[red] absolute right-2 cursor-pointer' />:<FaRegEye onClick={()=>setShowconpass(!showconpass)} className="text-[red] absolute right-2 cursor-pointer"/>
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
          Reagister
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
  Reagister with Goolgle  <FcGoogle className='text-xl'/> 
</button>



<button className=" py-2 px-6 bg-[#fff] hover:bg-[#dddada] rounded flex justify-center items-center gap-x-2">
  Reagister with GitHub <IoLogoGithub className='text-xl'/>
</button>

</div>


<div className="text-black">
     <p className='text-lg mt-4 pb-8 text-center '>Already have an account?  
             <Link to={'/login'}

           className='hover:underline text-[#3fe23f] underline-offset-4 hover:font-semibold'> Login Now
           </Link></p>
</div>








      </div>
    </div>



  )
}
