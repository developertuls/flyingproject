
import { Link } from "react-router-dom";





export const Gellryhome = () => {
  return (
    <div className=" py-10">
      <div className="flex flex-col md:flex-row container mx-auto px-4 gap-6">

        {/* Left side */}
        <div className="w-full md:w-1/2 ">
        
          <img
            src="images/bgg.jpg"
            alt="gallery"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 bg-white p-4">
          <h1 className="text-2xl font-bold mb-2">Bayshores Traditional</h1>
          <span className="text-gray-700 mb-2 block">
            Lorem ipsum, dolor sit amet consectetur ad
          </span>
          <p className="text-sm text-gray-600 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            vitae dolorem quidem suscipit fugit, quibusdam ducimus nesciunt
            corrupti culpa molestiae voluptas eius numquam at aut debitis
            consequuntur! Ab, consectetur repellat.
          </p>
          <button className="md:mx-0 mx-auto block bg-[#12CBC4] text-white px-5 py-2 rounded font-medium">
            Yourdesite
          </button>
        </div>

  


      </div>
      <div className="md:mt-9 flex flex-col md:flex-row container mx-auto px-4 gap-6">
        {/* Left side */}
      <div className="w-full md:w-1/2 bg-white p-4 ">
          <h1 className="text-2xl font-bold mb-2">Your home and the outside view are really impressive</h1>
          <span className="text-gray-700 mb-2 block">
            Lorem ipsum, dolor sit amet consectetur ad
          </span>
          <p className="text-sm text-gray-600 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            vitae dolorem quidem suscipit fugit, quibusdam ducimus nesciunt
            corrupti culpa molestiae voluptas eius numquam at aut debitis
            consequuntur! Ab, consectetur repellat.
          </p>
          <Link to={'/go'}><button className= "md:mx-0  mx-auto block bg-[#12CBC4] font-medium text-white px-4 py-2 rounded">
            Yourdesite
          </button></Link>
        </div>

        {/* Right side */}
        
  <div className="w-full md:w-1/2 ">
        
          <img
            src="images/carhom.jpg"
            alt="gallery"
            className="w-full h-auto object-cover"
          />
        </div>




</div>



<div className="bg-[#1B1464] py-8 mt-7 text-white">
  <div className=" text-center">
<ul className="grid grid-cols-3 md:grid-cols-6 container mx-auto justify-center items-center">
  <li>HOME <br /> Business All</li>
  <li>HOME <br /> market Abut</li>
  <li>HOME <br /> bulid Business</li>
  <li>HOME <br /> detelse</li>
  <li> Business <br /> All Doner</li>
  <li>HOME <br /> defret All</li>
</ul>
</div>
</div>

    </div>
  );
};
