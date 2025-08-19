







import  { useState } from 'react'
import { motion } from 'motion/react'
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firbease/firbease.config';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';








export const Reagister = () => {

const [showpass,setShowpass]=useState(false)
const [showconpass,setShowconpass]=useState(false)
const [errormsg,setErrormsg]=useState('')
const [successmsg,setSuccessmsg]=useState('')
const navigaet=useNavigate()
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

const goolgleProvider=new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const hendelsubmit=(e)=>{
  e.preventDefault()
  const name= e.target.name.value;
  const email= e.target.email.value;
  const password= e.target.password.value;
  const confrimpassword= e.target.confrimpassword.value;

  if(password !== confrimpassword){
 setErrormsg('Password do not match.')
 return;
  }

if(!passwordRegex.test(confrimpassword)){
setErrormsg("Must contain at least one uppercase, one lowercase, one number, one special character and be at least 6 characters long");
return;
}




  createUserWithEmailAndPassword(auth,email,password)
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
navigaet('/login')
},2000);



  })
  .catch(err=>{
    console.error(err);
    setErrormsg(err.message);
    setSuccessmsg('')
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
  text: "Your Reagister success!",
  icon: "success"
}); 

setTimeout(()=>{
  setSuccessmsg('')
navigaet('/login')
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
  text: "Your Reagister success!",
  icon: "success"
}); 
setTimeout(()=>{
  setSuccessmsg('')
navigaet('/login')
},2000);

})

}










  return (
<div className=" relative  flex justify-center items-center bg-[green] mt-[66px]  md:mt-[99px]"
    style={{
      backgroundImage:"url(https://media.istockphoto.com/id/905229102/photo/airplane-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=qvVATD_yyZPr8eSz404dPjZ5s-HFqHO7CzdVjub4iZ0=)",
    backgroundSize: "cover",
   backgroundPosition: "center",
    }}
>

  <div className="absolute inset-0 bg-[#12CBC4]/60 gb"></div> 
      <motion.div
       initial={{ opacity: 0, y: 100 }} // 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
       className="bgg relative  md:w-[36%] p-5  bg-[#6F1E51]/80 ">
         {/* <div className=" bg-black bg-opacity-60 "></div> */}
        <h2 className="text-white font-bold text-center md:text-3xl mb-6 text-3xl">Reagister</h2>
        <form onSubmit={hendelsubmit} className="space-y-4 bg-[#1B1464]/20">
          <input
           type="text"
           className="w-full border outline-none px-4 py-3 placeholder:text-2xl rounded focus:ring-2 focus:ring-[#e67e22]"
           placeholder="Yor Full Name"
            name="name" 
            id=""
            required
             />



          <input
           type="email"
           className="w-full border placeholder:text-2xl   outline-none px-4 py-3 rounded focus:ring-2 focus:ring-[#e67e22]"
           placeholder="Yor Email"
            name="email" 
            id=""
            required
             />



     {/* onlypassword */}

     <div className='relative flex items-center '>
<input
           type={showpass ?'text' :'password'}
           className="w-full border outline-none px-4 py-3 placeholder:text-2xl  rounded focus:ring-2 focus:ring-[#e67e22]"
           placeholder="Your Password"
            name="password"
             id=""
             required
              />

{showpass ? <IoMdEyeOff  onClick={()=>setShowpass(!showpass)}  className='text-[#dcd8d8] absolute right-2 cursor-pointer text-2xl'/>:<FaRegEye onClick={()=>setShowpass(!showpass)} className="text-[#dcd8d8] text-2xl absolute right-2 cursor-pointer"/>
}



     </div>
          

<div className='relative flex items-center'>

 <input
           type={showconpass?'text' :'password'}
           className="w-full border outline-none placeholder:text-2xl  px-4 py-3 rounded focus:ring-2 focus:ring-[#e67e22]"
           placeholder="Your Confrim Password"
            name="confrimpassword"
             id="" 
             required
             />

{showconpass ? <IoMdEyeOff onClick={()=>setShowconpass(!showconpass)} className='text-[#dcd8d8] absolute right-2 cursor-pointer text-2xl' />:<FaRegEye onClick={()=>setShowconpass(!showconpass)} className="text-[#dcd8d8] text-2xl absolute right-2 cursor-pointer"/>
}









</div>
  {
    errormsg && <p className="text-[red] text-center justify-center animate-bounce">{errormsg}</p>
  }   

  {
    successmsg && <p className="text-[#2acb2a] text-xl text-center justify-center animate-bounce">{successmsg}</p>
  }       

<div className='flex items-center justify-between'>
<p>
  <input
   type="checkBox"
   name=''
   id='checkBox'
   required
    />
    <label htmlFor="checkBox" className='text-white'>Accept trems & <Link className='text-[#27e327] hover:underline underline-offset-4'>condition</Link> </label>
</p>


  <p
   className='hover:text-[#46ff46] text-white hover:underline underline-offset-4  text-right   text-xl hover:cursor-pointer'>
           Forgot Password
      
</p>
</div>




        <button
        type="submit"
         className="w-full text-white   bg-[#00d2d3] hover:bg-[#1d6d6d] py-2 px-6 text-lg md:text-2xl font-semibold rounded cursor-pointer">
          Reagister
        </button>

        </form>

{/* divider */}
<div className="flex items-center my-6">
  <div className="flex-grow h-px bg-[#e1dddd] "></div>
  <span className="text-[#e1dddd] mx-4">OR</span>
  <div className="flex-grow h-px bg-[#e1dddd]"></div>
</div>








<div className="text-black flex flex-col space-y-3 mt-3">
<button onClick={goolgleBtn} className=" py-2 px-6 bg-[#fff] hover:bg-[#dddada] rounded flex justify-center items-center gap-x-2 text-xl ">
  Reagister with Goolgle  <FcGoogle className='text-2xl'/> 
</button>



<button onClick={GitHubeBtn} className=" py-2 px-6 bg-[#fff] hover:bg-[#dddada] rounded flex justify-center items-center gap-x-2 text-xl">
  Reagister with GitHub <IoLogoGithub className='text-2xl'/>
</button>

</div>


<div className="text-white">
     <p className='text-lg mt-4 pb-8 text-center '>Already have an account ?  
             <Link to={'/login'}

           className='hover:underline text-[#3fe23f] underline-offset-4 hover:font-semibold'> Login Now
           </Link></p>
</div>








      </motion.div>
    </div>



  )
}
