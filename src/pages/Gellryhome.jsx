
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";


const countries = [
  { id: 1, name: "Bangladesh", 
  Images:[
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaW4BkIM5Gtg5HjZP2U9zrfnh2g1EBkc5rQ&s" ,
    ],
    flag: "https://flagcdn.com/w320/bd.png"},
  { id: 2, name: "India", flag: "https://flagcdn.com/w320/in.png" },
  { id: 3, name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
  { id: 4, name: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
  { id: 5, name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
];



export const Gellryhome = () => {
const [search, setSearch] = useState("");
const shownave = useNavigate();



// search Allcuntris

 const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );



  // show List hidden
  const displayCountries = search
    ? filteredCountries
    : countries.filter((c) => !c.hidden); 













  return (
    
    <div className=" py-10 border">
<h1 className="md:text-5xl text-4xl px-4 font-bold text-center mb-9">Hotel booking for all <br /> <span className="text-[#EA2027]">countries</span></h1>
 <div class="overflow-hidden flex items-center justify-center w-[95%] rounded-lg mx-auto  py-6 bg-[#12CBC4]">
   <div className="overflow-hidden" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
       {search && filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <Link
           
              key={country.id}
             to={`/country/${country.id}`} className="bg-[#fff] p-5 ml-5"
               style={{ textDecoration: "none", color: "inherit"


                
                }}
            >


              
              <img   className="cursor-pointer"  src={country.flag} alt={country.name} width="100"  />
              <h4 className="animate-bounce mt-2">{country.name}</h4>
      
            </Link>
          ))
        ) : (
          <p className="ml-4 font-semibold text-[#121273]">No country found</p>
        )}
      </div> 
  
  
  <div class="relative flex mx-auto justify-center text-2xl  items-center px-6 w-full max-w-md">
    <input
      type="text"
      value={search}
       onChange={(e) => setSearch(e.target.value)}
      placeholder="Search for a country..."
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



    </div>
  );
};
