
import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { SiHomeassistant } from "react-icons/si";
import { motion } from "motion/react";

export const Gellryhome = () => {
  return (
    <div className=" py-10 ">
      <div className="flex flex-col md:flex-row container mx-auto px-4 gap-6">

        {/* Left side */}
        <div className="new w-full md:w-1/2 md:h-[400px] h-[300px]" style={{
          backgroundImage:"url(https://plus.unsplash.com/premium_photo-1746387628298-af5695a3f935?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        }}>
{/*         
          <img
            src="images/bgg.jpg"
            alt="gallery"
            className="w-full h-auto object-cover "
          /> */}
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2  p-4 ">
          <h1 className="text-2xl font-bold mb-2 text-center md:text-left">Bayshores Traditional</h1>
         
          <p className="text-sm  mb-4 md:text-left text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            vitae dolorem quidem suscipit fugit, quibusdam ducimus nesciunt
            corrupti culpa molestiae voluptas eius numquam at aut debitis
            consequuntur! Ab, consectetur repellat.
          </p>
          <button className="transition-all duration-5.9   hover:px-7 hover:py-3  md:mx-0 mx-auto block bg-[#12CBC4] hover:bg-[#2d7a77] text-white px-6 py-2 rounded font-medium">
            Yourdesite
          </button>
        </div>

  


      </div>
      <div className="md:mt-9 flex flex-col md:flex-row container mx-auto px-4 gap-6">
        {/* Left side */}
      <div className="w-full md:w-1/2  p-4 ">
          <h1 className="text-2xl font-bold mb-2 text-center md:text-left">Your home and the outside view are really impressive</h1>
         
          <p className="text-sm  mb-4 md:text-left text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            vitae dolorem quidem suscipit fugit, quibusdam ducimus nesciunt
            corrupti culpa molestiae voluptas eius numquam at aut debitis
            consequuntur! Ab, consectetur repellat.
          </p>
          <Link>
          <button
           className= "transition-all duration-5.9 md:mx-0 hover:px-7 hover:py-3 hover:bg-[#2d7a77] mx-auto block bg-[#12CBC4] font-medium text-white px-6 py-2 rounded">
            Yourdesite
          </button>
          </Link>
        </div>

        {/* Right side */}
        
  <div className="new-2 w-full md:w-1/2 md:h-[400px] h-[300px]" style={{
    backgroundImage:"url(https://plus.unsplash.com/premium_photo-1747326386378-5635788ea82c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
  }} >
        
          {/* <img
            src="images/carhom.jpg"
            alt="gallery"
            className="w-full h-auto object-cover"
          /> */}
        </div>
       




</div>


{/* flexdiv */}

<div className=" py-8 mt-[80px]  ">

  <h1 className="text-2xl md:text-4xl font-bold text-center "><span>Empowering</span> You through <br />Real Estste <span className="text-[#209c7d]">Solutions.</span> </h1>
  
  
  
  <div className="transition-all duration-4.5 p-8 mt-4 md:mt-7 mx-auto container  grid md:grid-cols-3 justify-center items-center md:gap-x-4 gap-y-5">

    
   {/* flexBox-1 */} 
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
   <h2 className="text-xl md:text-2xl font-semibold p-4 text-center">Builld Weaith with Ease.</h2>
   <p className="md:text-left text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto repudiandae tenetur totam sapiente officiis est</p>
  <button className="hover:bg-[#166663] hover:text-white w-full text-xl font-semibold block bg-[#12CBC4] mx-auto mt-9 px-7 py-2 rounded-full">Find Home</button>

 </motion.div>





  {/* flexBox-3 */} 
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
</div>

    </div>
  );
};
