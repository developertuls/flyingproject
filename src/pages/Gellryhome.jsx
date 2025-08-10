
import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { SiHomeassistant } from "react-icons/si";
import { motion } from "motion/react";
import { IoMdSearch } from "react-icons/io";



export const Gellryhome = () => {
  return (
    
    <div className=" py-10 border">
<h1 className="md:text-5xl text-4xl px-4 font-bold text-center mb-9">Hotel booking for all <br /> <span className="text-[#EA2027]">countries</span></h1>
 <div class="flex items-center justify-center w-[95%] rounded-lg mx-auto  py-3 bg-[#12CBC4]">
  <div class="relative flex mx-auto justify-center text-2xl  items-center px-6 w-full max-w-md">
    <input
      type="text"
      placeholder="Search... Your cuntry"
      class="w-full md:w-[400%]  mx-auto border overflow-hidden border-gray-300 rounded-lg md:py-3 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
   <IoMdSearch className="md:ml-[-60px] w-[5%] md:w-[40%]  ml-[-28px] text-2xl font-bold"/>

  </div>
</div>
  
   
    <div className="flex mt-12 flex-col md:flex-row container mx-auto px-4 gap-6">

        {/* Left side */}
        <div className="hover:scale-105 transition-all duration-150 new w-full md:w-1/2 md:h-[400px] h-[300px]" style={{
          backgroundImage:"url(https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg)"
        }}>





        </div>
        {/* Left side */}
        <motion.div
        
         className="hover:scale-105 transition-all duration-150 new w-full md:w-1/2 md:h-[400px] h-[300px]" style={{
          backgroundImage:"url(https://cdn.pixabay.com/photo/2020/05/04/09/58/house-5128521_1280.jpg)"
        }}>




        </motion.div>

        {/* Right side */}
        <div className="w-full md:w-1/2 md:mt-[75px] p-4 ">
          <h1 className="text-2xl font-bold mb-2 text-center md:text-left"> Family Hotel Design.</h1>
         
          <p className="text-sm  mb-4 md:text-left text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            vitae dolorem quidem suscipit fugit, quibusdam ducimus nesciunt
            corrupti culpa molestiae voluptas eius numquam at aut debitis
            consequuntur! Ab, consectetur repellat.
          </p>
          <p className="text-sm  mb-4 md:text-left text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            vitae dolorem quidem suscipit fugit, quibusdam ducimus nesciunt
            corrupti culpa molestiae voluptas eius numquam at aut debitis
            consequuntur! Ab, consectetur repellat.
          </p>
          <button className="transition-all duration-150   hover:px-7 py-3  md:mx-0 mx-auto block bg-[#ED4C67] hover:bg-[#a71418] text-white px-12 text-2xl rounded font-medium">
            Booking
          </button>
        </div>

  


      </div>
      <div className="md:mt-9 border  flex flex-col md:flex-row container mx-auto px-4 gap-6">
        {/* Left side */}
      <div className="">
          <h1 className="text-2xl font-bold mb-9 text-center mt-[50px] md:text-left ">The single home design and the outside view are really impressive.</h1>
         
          <p className="text-sm  mb-4  text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            vitae dolorem quidem suscipit fugit, quibusdam ducimus nesciunt
            corrupti culpa molestiae voluptas eius numquam at aut debitis
            consequuntur! Ab, consectetur repellat.
          </p>
          <Link>
          <button
           className= "transition-all duration-5.9 md:mx-0 hover:px-7 hover:py-3 hover:bg-[#b01419] mx-auto block bg-[#EA2027] text-2xl font-medium text-white px-12 py-3 rounded">
            Booking
          </button>
          </Link>
        </div>

      

        {/* Right side */}
        
  <div className="hover:scale-105 transition-all duration-150 new-2 w-full  md:h-[400px] h-[300px]" style={{
    backgroundImage:"url(https://media.istockphoto.com/id/1453121641/photo/modern-hotel-room-with-double-bed-night-tables-and-day-sofa-bed.jpg?s=612x612&w=0&k=20&c=1DgkQwVvd3XzGjCaZ3qzyLoinCSQtJoueQ5ODmzaw1w=)"
  }} >
        
       
        </div>
        
  <div className="hover:scale-105 transition-all duration-150  new-2 w-full  md:h-[400px] h-[300px]" style={{
    backgroundImage:"url(https://media.istockphoto.com/id/2220101153/photo/hotel-room.jpg?s=612x612&w=0&k=20&c=efduij5sBW3u3Fq0qP0HLwkBGbENZAlO3-uZwYo8ZKI=)"
  }} >
        
       
        </div>
       




</div>


{/* flexdiv */}

{/* <div className=" py-8 mt-[80px]  ">

  <h1 className="text-2xl md:text-4xl font-bold text-center "><span>Empowering</span> You through <br />Real Estste <span className="text-[#209c7d]">Solutions.</span> </h1>
  
  
  
  <div className="transition-all duration-4.5 p-8 mt-4 md:mt-7 mx-auto container  grid md:grid-cols-3 justify-center items-center md:gap-x-4 gap-y-5">


  <div className="w-[400px]   p-9 shadow-md ">
   <p className="flex justify-between items-center text-xl md:text-3xl font-bold">
   <FcHome className="text-[#6D214F]"/>
   <span className="text-gray-400">o1</span>
   </p> 
   <h2 className="text-xl md:text-2xl font-semibold p-4 text-center">Find Your Dream Home</h2>
   <p className="md:text-left text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto repudiandae tenetur totam sapiente officiis est </p>
  <button 
  className="transition-all duration-4.5   hover:bg-[#362ab9] w-full text-xl text-white font-semibold block bg-[#1B1464] mx-auto mt-9 px-7 py-2 rounded-full">
    Find Home
    </button>

 </div>






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
   <h2 className="text-xl md:text-2xl font-semibold p-4 text-center">Builld Weaith with Ease.</h2>
   <p className="md:text-left text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto repudiandae tenetur totam sapiente officiis est</p>
  <button className="hover:bg-[#166663] hover:text-white w-full text-xl font-semibold block bg-[#12CBC4] mx-auto mt-9 px-7 py-2 rounded-full">Find Home</button>

 </motion.div>





  <div className="transition-all duration-4.5   w-[400px]  text-left p-9 shadow-md">
   <p className="flex justify-between items-center text-xl md:text-3xl font-bold">
   <SiHomeassistant className="text-[#6d6a6a]"/>
   <span className="text-gray-400">o3</span>
   </p> 
   <h2 className="text-xl md:text-2xl font-semibold p-4 text-center">Love Home style</h2>
   <p className="md:text-left text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto repudiandae tenetur totam sapiente officiis est</p>
  <button
   className="hover:bg-[#2d239d] text-white w-full text-xl font-semibold block bg-[#1B1464] mx-auto mt-9 px-7 py-2 rounded-full">
    Find Home
    </button>

 </div>






</div>
</div> */}

    </div>
  );
};
