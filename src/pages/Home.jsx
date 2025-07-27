
import { motion } from "framer-motion";  "framer-motion"





export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative h-screen bgg overflow-hidden" style={{
        backgroundImage:"url(https://plus.unsplash.com/premium_photo-1661883954124-f542bd113a02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      }}
    >
      <div className="absolute inset-0 bg-[#3e42b1] bg-opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }} // 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" absolute inset-0 flex items-center md:left-[262px]"
      >
        <h1 className="  md-text-h1 hidden md:block font-medium  text-center  text-white md:text-9xl  md:mt-9 leading-tight">
          Your <br/>life style<br /> Home
        </h1>
        <h1 className="block md:hidden mx-auto  md:mx-0  text-center text-6xl text-white md:text-9xl md:mt-9 font-bold leading-tight">
          Your life style  Home
        </h1>
      </motion.div>
    </motion.div>

  );
};
