

import { FaBars} from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState} from 'react';
import { GiAirplaneDeparture } from "react-icons/gi";
import { useNavigate } from "react-router-dom";









const Nebver = () => {




const naviget=useNavigate()  
const [isopen ,setIsopen]=useState(false)
const [Activ ,setActiv]=useState('')




const toggolMenu=()=>{
setIsopen(!isopen)

}


const ActivColor=(path)=>{
setActiv(path)

}


const gotologin=()=>{
alert('Please Login or /Reagister')
naviget("/login")



}







  return (
<motion.nav
  // variants={sectionVariant} 
initial={{ opacity: 0, x: 100}}
whileInView={{ opacity: 1, x: 0}}
transition={{ duration: 0.1, ease: "easeOut" }}
viewport={{ once: true }}

  className='bg-[#fff] py-4 md:py-5 fixed top-0 w-full z-40 shadow-md transition-transform duration-500 ease-in-out
 '  
  
        

>


  {/* Desktopmenu */}
  <motion.div
 
   className='w-full md:w-[95%] mx-auto'>
  <div className='container mx-auto flex justify-between items-center'>
   <div className="  text-2xl flex justify-center items-center">
   <GiAirplaneDeparture className=" font-bold  text-3xl text-[#B33771] " />
<h3 className="text-[#4834d4] font-bold"> <span className="font-bold">T</span>ravels</h3>
     
      
   </div>








   {/* mobilemenu=Button */}

<div className='md:hidden ml-[209px]'>
  <button onClick={toggolMenu}>
    {
      isopen ? <IoMdClose size={24} />:<FaBars size={22} />
    }
  </button>
</div>

    <motion.ul
     className='  md:text-xl hidden md:flex gap-x-4 md:gap-x-6'>
<li>
  <Link 
to={'/home'} onClick={()=>ActivColor('/home')}
 className={`text-[#ED4C67] font-semibold ${Activ === '/booking'? 'font-bold ':'hover:font-bold'}`}>Home
 </Link>
 </li >


<li
onClick={gotologin}
 initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
>
  <Link 
to={'/booking'} onClick={()=>ActivColor('/booking')}
 className={` ${Activ === '/booking'? 'font-bold text-[#0440b1]':'hover:text-[#0440b1]'}`}>Booking Flight
 </Link>
 </li>


     <li
      initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
     >
      <Link to={'/contact'} onClick={()=>ActivColor('/contact')}
       className={` ${Activ==='/contact' ? 'font-bold text-[#0440b1]':'hover:text-[#0440b1]'}`}>Contact
       </Link>
       </li>
     <li
 initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}

     > 
      <Link to={'/blogs'}
      onClick={()=>ActivColor('/blogs')}
        className={`${Activ==='/blogs'? 'font-bold text-[#0440b1]':'hover:text-[#0440b1]  transition-all duration-150' }`}>BLOGS
        </Link>
        </li>
      <li>
        <Link to={'/like'}
        onClick={()=>ActivColor('/like')}
         className={`${Activ=== '/like' ?'hover:font-bold text-[#0440b1]':'hover:text-[#0440b1]'}`} >
        
          Hotel Booking
          </Link></li>
     
    </motion.ul>
    <Link to={'/login'}>
    <button
    onClick={()=>ActivColor('/login')}
     className={`${Activ==='/login'?'hover:bg-[#382bc5]  bg-[#1B1464] text-[#fff] px-6 py-2 md:text-2xl hidden md:block':'hover:bg-[#197b78] rounded-lg text-white bg-[#166663] px-6 py-2 md:text-2xl hidden md:block'}`}>
      Login
      </button>
      </Link>




{/* mobile menu collapsed */}
<div className={` md:hidden w-full absolute   top-full left-0 transition-all duration-300 ease-in-out  ${isopen ?'block max-h-[500px] ':'hidden max-h-0'}`}>
  <motion.ul
 initial={{ opacity: 0, y: -100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7, ease: "easeOut" }}
viewport={{ once: true }}
   className='py-6 flex flex-col items-center bg-[#130f40]/90 text-white font-bold'>





<li>
  <Link 
to={'/home'} onClick={()=>ActivColor('/home')}
 className={`text-[#ffa502]  font-semibold ${Activ === '/booking'? '  font-bold':'font-bold'}`}>HOME
 </Link>
 </li>




  <li>
  <Link 
to={'/booking'} onClick={()=>ActivColor('/booking')}
 className={` ${Activ === '/booking'? 'text-[#3c40c6]  font-bold':'hover:font-bold'}`}>BOOKING
 </Link>
 </li>




     <li>
      <Link to={'/contact'} onClick={()=>ActivColor('/contact')}
       className={` ${Activ==='/contact' ? 'text-[#3c40c6]  font-bold':'hover:font-bold'}`}>CONTACT
       </Link>
       </li>






     <li> 
      <Link to={'/blogs'}
      onClick={()=>ActivColor('/blogs')}
        className={`${Activ==='/blogs'? 'text-[#3c40c6]   font-bold':'hover:font-bold'}`}>BLOGS
        </Link>
        </li>






      <li>
        <Link to={'/like'}
        onClick={()=>ActivColor('/like')}
         className={`${Activ=== '/like' ?'text-[#3c40c6] font-bold':'hover:font-bold'}`} >
        
          LIKE HOME
          </Link></li>
     
  
    <Link to={'/login'}>
    <button
    
    onClick={()=>ActivColor('/login')}
     className={`${Activ==='/login'?'hover:bg-[#382bc5]  bg-[#1B1464] text-[#fff] px-6 py-2  ':'hover:bg-[#2efff8]  bg-[#2bcbba] px-6 py-2 md:text-2xl mt-5'}`}>
    Login

      </button>
      </Link>
  
   
    </motion.ul>
</div>

  </div>
  </motion.div>
</motion.nav>
  )
}

export default Nebver