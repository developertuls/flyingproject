
import  {  useState } from 'react'
import { FaBars} from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';










const Nebver = () => {

const [isopen ,setIsopen]=useState(false)
const [Activ ,setActiv]=useState('')

const toggolMenu=()=>{

setIsopen(!isopen)

}


const ActivColor=(path)=>{

setActiv(path)

}











  return (
<nav className='bg-[#fff] py-4 md:py-6  fixed top-0 w-full z-50 shadow-md'>


  {/* Desktopmenu */}
  <div className=' md:w-[95%] mx-auto'>
  <div className='container mx-auto flex justify-between items-center'>
   <div>
    <h3 className='logo-animet'>
      <span className=' md:text-4xl'>M</span>
      <span className=' md:text-4xl'>A</span>
      <span className=' md:text-4xl'>R</span>
      <span className=' md:text-4xl'>U</span>
      <span className=' md:text-4xl'>F</span>
      <span className=' md:text-4xl'>De .</span>
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

    <ul className=' text-text md:text-2xl hidden md:flex gap-x-4 md:gap-x-6'>
<li>
  <Link 
to={'/home'} onClick={()=>ActivColor('/home')}
 className={`text-[#006266] font-semibold ${Activ === '/booking'? 'font-bold':'hover:font-bold'}`}>HOME
 </Link>
 </li >


<li>
  <Link 
to={'/booking'} onClick={()=>ActivColor('/booking',alert('Please Login or /Reagister'))}
 className={` ${Activ === '/booking'? 'font-bold':'hover:font-bold'}`}>BOOKING
 </Link>
 </li >


     <li>
      <Link to={'/contact'} onClick={()=>ActivColor('/contact')}
       className={` ${Activ==='/contact' ? 'font-bold':'hover:font-bold'}`}>CONTACT
       </Link>
       </li>
     <li> 
      <Link to={'/blogs'}
      onClick={()=>ActivColor('/blogs')}
        className={`${Activ==='/blogs'? 'font-bold':'hover:font-bold'}`}>BLOGS
        </Link>
        </li>
      <li>
        <Link to={'/like'}
        onClick={()=>ActivColor('/like')}
         className={`${Activ=== '/like' ?'hover:font-bold':'hover:font-bold'}`} >
        
          LIKE HOME
          </Link></li>
     
    </ul>
    <Link to={'/login'}>
    <button
    onClick={()=>ActivColor('/login')}
     className={`${Activ==='/login'?'hover:bg-[#382bc5]  bg-[#1B1464] text-[#fff] px-6 py-2 md:text-2xl hidden md:block':'hover:bg-[#197b78] text-white bg-[#166663] px-6 py-2 md:text-2xl hidden md:block'}`}>
      Login
      </button>
      </Link>
{/* mobile menu collapsed */}
<div className={` md:hidden w-full absolute top-full left-0 transition-all duration-300 ease-in-out  ${isopen ?'block max-h-[500px] ':'hidden max-h-0'}`}>
  <ul className='flex flex-col items-center bg-blue-500 py-4'>
  <li>
  <Link 
to={'/booking'} onClick={()=>ActivColor('/booking')}
 className={`text-[#3c40c6] ${Activ === '/booking'? 'font-bold':'hover:font-bold'}`}>BOOKING
 </Link>
 </li >
     <li>
      <Link to={'/contact'} onClick={()=>ActivColor('/contact')}
       className={` ${Activ==='/contact' ? 'font-bold':'hover:font-bold'}`}>CONTACT
       </Link>
       </li>
     <li> 
      <Link to={'/blogs'}
      onClick={()=>ActivColor('/blogs')}
        className={`${Activ==='/blogs'? 'font-bold':'hover:font-bold'}`}>BLOGS
        </Link>
        </li>
      <li>
        <Link to={'/like'}
        onClick={()=>ActivColor('/like')}
         className={`${Activ=== '/like' ?'hover:font-bold':'hover:font-bold'}`} >
        
          LIKE HOME
          </Link></li>
     
  
    <Link to={'/login'}>
    <button
    onClick={()=>ActivColor('/login')}
     className={`${Activ==='/login'?'hover:bg-[#382bc5]  bg-[#1B1464] text-[#fff] px-6 py-2 md:text-2xl hidden md:block':'hover:bg-[#2efff8]  bg-[#2bcbba] px-6 py-2 md:text-2xl hidden md:block'}`}>
      Login
      </button>
      </Link>
  
   
    </ul>
</div>

  </div>
  </div>
</nav>
  )
}

export default Nebver