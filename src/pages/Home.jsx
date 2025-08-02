

import { motion } from "framer-motion";
import { useState ,useEffect} from "react";





export const Home = () => {



const slides = [
  {
  image: "https://images.unsplash.com/photo-1543773819-62742579ede6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "	Dubai",

   
  },
  {
  

    image: "https://plus.unsplash.com/premium_photo-1697730269884-629ccf615721?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "	Saudi Arabia",

  },
  {
 image: "https://media.istockphoto.com/id/185107025/photo/airplane-in-the-sky.jpg?s=612x612&w=0&k=20&c=rbSuRHJq1LWskEZY-txNs3ZzjMpejO6Uews0PErBflI=",
    text: "Explore the World with Comfort",
  },
  {
    image: "https://www.stuff.co.nz/media/images/9Tzi8ywRz924XE3uHaD6DfGZQfjEdZd7oKlsiR53VLHvSZExpMzuRmKdwHbkL9PkkQ5yn4iGOMQNo5jBcDKr+fVq57khvBlTgahLBPx0BvPCtneyVECthyLnRvY4Yz64UrDyd09szp1CbA1qAeJZpHowanIr3ZBBkm8tRPwRzu5zIN7+GgEMBERX8uBlj9FhWpvXCaBaS+S6VT6IInvE5Q==",
    text: "	Korea",
  },
  {
    image: "https://acko-cms.ackoassets.com/Places_to_visit_in_Jordan_8edeb4aaa5.png",
    text: "	Jordan",
  },
  {
    image: "https://www.investasian.com/wp-content/uploads/Indonesia-Real-Estate-The-Ultimate-Guide.png",
    text: "Indonesia",
  },
  {
    image: "https://images.unsplash.com/photo-1740253199343-b8ff11d70451?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "	Kuwait",
  },
  {
 image: "https://media.istockphoto.com/id/2210099012/photo/chhatrapati-shivaji-maharaj-terminus-station-illuminated-at-twilight-in-mumbai-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=wNVfvn_vq9g57z-QOmuGgnakDtHmGSMXqurmQHwHKtk=",
    text: "Mumbai ",
  },
];


 const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);





















  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative md:h-[200vh] h-[190vh] bgg overflow-hidden " style={{
        backgroundImage:"url(https://images.unsplash.com/photo-1582360113507-e22478766daf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8)"
      }}
    >
      <div className="absolute inset-0 bg-[#130f40]/50 "></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }} // 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" absolute inset-0 container mx-auto  mt-[90px]"
      >
        <h1 className=" text-center md-text-h1 hidden md:block font-medium    text-white md:text-9xl  md:mt-9 leading-tight">
        Travel  <span className="text-[#EA2027]">the  Sky</span>
        </h1>
        <h1 className="block md:hidden mx-auto  md:mx-0  text-center text-6xl text-white md:text-9xl md:mt-9 font-bold leading-tight">
          Travel  <span className="text-[#ED4C67]">the sky</span>!
        </h1>


{/* Form */}
   <div className=" mx-auto p-6 shadow-xl h-[] border mt-9">
      {/* Left: Slider */}
      <div className=" h-[90vh] overflow-hidden  relative ">
           
        <div
        
          className="relative flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
         
         
          {slides.map((slide, index) => (
            <div key={index} className=" min-w-full relative">
              
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full md:h-[90vh] h-[80vh] object-cover opacity-70"
              />
              <div className="absolute text-3xl bottom-9 left-4 bg-black bg-opacity-50 text-white px-9 py-3 rounded">
                {slide.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Form */}
      <div className="bg-[#079992]">
      <h2 className="text-center text-3xl text-white font-bold">Flying From</h2>
     <motion.form
       initial={{ opacity: 0, y: 100 }} // 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      className="w-full md:w-[70%] border bg-[#0c2461] border-red-500 mx-auto p-4 rounded space-y-4">
  <div className="grid md:grid-cols-2 gap-4">
   
    <motion.input
    initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
      type="text"
      placeholder="Flying From"
      className="w-full border border-gray-300 p-3 rounded"
    />
    <motion.input
    // initial={{ opacity: 0, x: 100 }}
    //             whileInView={{ opacity: 1, x: 0 }}
    //             transition={{ duration: 0.6 }}
    //             viewport={{ once: true }}
      type="text"
      placeholder="Flying To"
      className="w-full border border-gray-300 p-3 rounded"
    />
    <motion.input
    // initial={{ opacity: 0, x: -100 }}
    //             whileInView={{ opacity: 1, x: 0 }}
    //             transition={{ duration: 0.6 }}
    //             viewport={{ once: true }}
      type="date"
      placeholder="ff"
      className="w-full border border-gray-300 p-3 rounded"
    />
    <motion.input
    initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
      type="date"
      className="w-full border border-gray-300 p-3 rounded"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-[#1d46b0] hover:bg-blue-700 text-white py-3 text-2xl rounded font-semibold"
  >
    Search Flights
  </button>
</motion.form>
</div>
    </div>































      </motion.div>
    </motion.div>

  );
};
