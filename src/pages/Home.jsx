
import { motion } from "framer-motion";  "framer-motion"

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative h-screen bgg overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#6064e1] bg-opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }} // 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" absolute inset-0 flex items-center md:left-[262px]"
      >
        <h1 className=" shadow-2xl md-text-h1 hidden md:block font-medium  text-center  text-white md:text-9xl md:mt-9 leading-tight">
          Your <br/>life style<br /> Home
        </h1>
        <h1 className="block md:hidden mx-auto  md:mx-0  text-center text-5xl text-white md:text-9xl md:mt-9 font-bold leading-tight">
          Your life style  Home
        </h1>
      </motion.div>
    </motion.div>

  );
};
