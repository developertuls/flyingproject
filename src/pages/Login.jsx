 
 
 
 import { motion } from "motion/react";
import { useRef, useState } from "react";

 
 
 







 export const Login = () => {
 const [email, setEmail] = useState("");
 const [name, setName] = useState("");
 const [date, setDate] = useState("");
 const [price, setPrice] = useState("");
 const [phone, setPhone] = useState("");
 const fromRef=useRef(null)
const [submiCplor,setSubmitColor]=useState(false)
const [input,setInput]=useState('')


 const handleSubmit = (e) => {
    e.preventDefault();
  
  const from=fromRef.current;
  console.log('name',name);
  console.log('phone',phone);
  console.log('Email',email);
  console.log('price',price);
  console.log('date',date);

 setName("");
  setPhone("");
  setEmail("");
  setPrice("");
  setDate("");



  };



const submitColor=()=>{

setSubmitColor(!submiCplor)


}









  return (
    <div className=" min-h-screen py-10 md:mt-[40px]">
      <div className="p-9  container mx-auto flex flex-col md:flex-row md:gap-x-5 md:w-[90%] justify-center items-stretch px-4">

        {/* Left side text */}
        <div className="text-div relative w-full md:w-[99%] h-[600px] md:h-[500px] overflow-hidden mb-5 md:mb-0">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <div className="absolute inset-0 p-4 md:p-9 text-white text-center md:text-left">
            <h2 className="mt-7 md:mt-9 text-2xl md:text-3xl font-extrabold">someday is now.!</h2>
            <p className="mt-4 text-lg font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel provident eum cumque vitae veniam nobis, ratione voluptates velit omnis culpa quae optio. Illum eum cumque dolorum explicabo officiis.<br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel provident eum cumque vitae veniam nobis.
            </p>
            <motion.button
            initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
             className="mt-6 bg-[#d35400] px-4 py-2 text-white text-lg md:text-2xl font-medium hover:bg-[#ff8534]">
              Get start Booking
            </motion.button>
          </div>
        </div>

        {/* Right side form */}
        <motion.div
        initial={{ opacity: 0, y: 100 }} // 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
         className="from-bg relative w-full md:w-1/2 h-[600px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <form  onSubmit={handleSubmit} className="absolute inset-0 bg-teal-500/20 text-white text-center flex flex-col justify-center items-center px-4">
            <h2 className="text-xl md:text-3xl mb-6">Get Booking</h2>

            <input
            onChange={(e) => setName(e.target.value)}
              className="input-bg w-[70%] p-3  placeholder:text-2xl  text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="text" name="name" placeholder="Your name"
              value={name}
            required/>

            <input
             onChange={(e) => setPhone(e.target.value)}
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000]  outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="tel" name="phone" placeholder="Your Phon"
              value={phone}
            required/>

            <input
             onChange={(e) => setEmail(e.target.value)}
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="email" name="email" placeholder="Your Email"
              value={email}
            required/>


            <input
            onChange={(e) => setPrice(e.target.value)}
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="number" name="price" placeholder="Total price:"
              value={price}
            required/>

            <input
            onChange={(e) => setDate(e.target.value)}
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="Date" name="date"  placeholder="visit date"
              value={date} 
            required/>



            <button
            onClick={()=>submitColor(submiCplor)}
            
              type="submit"
              className={`${submiCplor ?'bg-[red] py-2 px-6 text-lg md:text-2xl font-semibold w-[70%]':'bg-[#00d2d3] py-2 px-6 text-lg md:text-2xl font-semibold w-[70%]'}`}>
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

