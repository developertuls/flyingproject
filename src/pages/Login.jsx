
import { motion } from "framer-motion";
import { Link } from "react-router-dom";






export const Login = () => {











  return (
    <div className="min-h-screen py-10 md:mt-[40px]">

 






      <div className="p-9 container mx-auto flex flex-col md:flex-row md:gap-x-5  justify-center items-stretch px-4 overflow-hidden ">
        {/* Left side */}
        <div className=" text-div relative w-full  h-[500px] md:h-[500px] overflow-hidden mb-5 md:mb-0"
    style={{
        backgroundImage:
          "url(https://thepointsguy.global.ssl.fastly.net/us/originals/2023/05/person-at-airport-with-carry-on-luggage_franckreporter.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}     
        >
          <div className="absolute inset-0 bg-[#1B1464]/70"></div>
          <div className="absolute inset-0 p-4 md:p-9 text-white text-center md:text-left">
            <h2 className="mt-[50px] md:mt-9 text-3xl md:text-3xl font-extrabold">someday is now.!</h2>
            <p
             className="mt-[40px] text-lg font-medium md:text-lef text-justify">

 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, rerum, optio placeat officia porro at libero iste quod vel dolor fuga accusamus? Quidem ratione error, illo doloribus minima impedit quaerat amet ipsa possimus hic nemo perspiciatis explicabo deleniti similique placeat,
<span className="hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, rerum, optio placeat officia porro at libero iste quod vel dolor fuga accusamus? Quidem ratione error, illo doloribus minima impedit quaerat amet ipsa possimus hic nemo perspiciatis explicabo deleniti similique placeat, minus optio veniam consectetur reiciendis!
</span>
    
            </p>
            <Link to={"/like"}>
              <motion.button
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-9 bg-[#EA2027] px-4 py-2 text-white text-lg md:text-2xl font-medium hover:bg-[#c1161c]"
              >
                Get FlyIt  Booking
              </motion.button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
