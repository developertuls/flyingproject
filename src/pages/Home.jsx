
import { motion } from "framer-motion";
import Slider from "./Slider";

export const Home = (  ) => {


 










  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" relative min-h-screen overflow-hidden "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1582360113507-e22478766daf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8)",
        backgroundSize: "cover ",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#130f40]/50"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10   mt-[50px] md:mt-[50px] px-4 "
      >


      
      </motion.div>
          <div className=" w-full relative">
         <motion.h1
         initial={{ opacity: 0, y: 300 }} // 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
         className="md-text-h1 md:h-[300px] pb-12  py-14 bg-[#130f40]  text-center  font-bold  text-white text-5xl md:text-9xl  leading-tight">
          Travel <span className="text-[#EA2027]">the Sky</span>
        </motion.h1>
       </div>
        <Slider/>


        
    </motion.div>
  );
};
