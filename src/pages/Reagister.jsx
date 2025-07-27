







import  { useState } from 'react'
import { motion } from 'motion/react'










export const Reagister = () => {









 const [email, setEmail] = useState("");
 const [name, setName] = useState("");
 const [password, setPassword] = useState("");
 const [confrem, setConfrem] = useState("");


const [submiCplor,setSubmitColor]=useState(false)



 const handleSubmit = (e) => {
    e.preventDefault();

  console.log('name',name);
  console.log('Email',email);
 
  console.log('password',password);
  console.log('password',password);

  setName("");
  setPassword("");
  setEmail("");
  setConfrem("");
 



  };


const submitColor=()=>{

setSubmitColor(!submiCplor)


}











  return (
     <div className='bgg   bg-[green] relativ md:mt-[99px] overflow-hidden'style={{
      backgroundImage:"url(https://plus.unsplash.com/premium_photo-1661963505505-f992fa0a8630?q=80&w=1294&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 mt-9  md:h-[606px]"></div>
 <motion.div
        initial={{ opacity: 0, y: 100 }} // 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
         className="mx-auto relative w-full md:w-1/2 h-[600px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <form  onSubmit={handleSubmit} className="absolute inset-0 bg-[#1B1464]/20 text-white text-center flex flex-col justify-center items-center px-4">
            <h2 className="text-xl md:text-3xl mb-6">Get Reagister</h2>

            <input
            onChange={(e) => setName(e.target.value)}
              className="input-bg w-[70%] p-3  placeholder:text-2xl  text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="text" name="name" placeholder="Your name"
              value={name}
            required/>



            <input
             onChange={(e) => setEmail(e.target.value)}
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="email" name="email" placeholder="Your Email"
              value={email}
            required/>



            <input
             onChange={(e) => setPassword(e.target.value)}
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="password" name="password" placeholder="Your Password"
              value={password}
            required/>



            <input
             onChange={(e) => setConfrem(e.target.value)}
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="password" name="password" placeholder="Your Confirm password"
              value={confrem}
            required/>


          

          



            <button
            onClick={()=>submitColor(submiCplor)}
            
              type="submit"
              className={`${submiCplor ?'bg-[red] py-2 px-6 text-lg md:text-2xl font-semibold w-[70%]':'bg-[#00d2d3] py-2 px-6 text-lg md:text-2xl font-semibold w-[70%]'}`}>
              Submit
            </button>
          </form>
        </motion.div>




    
    
    </div>
  )
}
