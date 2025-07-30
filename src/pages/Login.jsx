
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertBox } from "./AlertBox";





export const Login = () => {
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [date,setDate]=useState("");
  const [price,setPrice]=useState("");
  const [phone,setPhone]=useState("");
  const navigate = useNavigate();
  const [submiCplor,setSubmitColor]=useState(false);
  const [showAlert,setShowAlert] = useState(false);







  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);

    const formData = { name, email, phone, price, date };

    console.log(formData);

    // Clear inputs
    setName("");
    setPhone("");
    setEmail("");
    setPrice("");
    setDate("");


    // Redirect after 2 seconds
    setTimeout(() => {
      navigate("/booking-confirmation", { state: formData });
    }, 2000);




  };




  return (
    <div className="min-h-screen py-10 md:mt-[40px]">

    {/* 🔔 Alert Box */}
    {showAlert && (
    <AlertBox
    message="Booking submitted successfully! Redirecting..."
    onClose={() => setShowAlert(false)}
    />
    )}






      <div className="p-9 container mx-auto flex flex-col md:flex-row md:gap-x-5 md:w-[90%] justify-center items-stretch px-4">
        {/* Left side */}
        <div className="text-div relative w-full md:w-[99%] h-[600px] md:h-[500px] overflow-hidden mb-5 md:mb-0">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 p-4 md:p-9 text-white text-center md:text-left">
            <h2 className="mt-[50px] md:mt-9 text-3xl md:text-3xl font-extrabold">someday is now.!</h2>
            <p
             className="mt-[67px] text-lg font-medium md:text-lef text-justify">

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, rerum, optio placeat officia porro at libero iste quod vel dolor fuga accusamus? Quidem ratione error, illo doloribus minima impedit quaerat amet ipsa possimus hic nemo perspiciatis explicabo deleniti similique placeat, minus optio veniam consectetur reiciendis!
            </p>
            <Link to={"/like"}>
              <motion.button
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-9 bg-[#d35400] px-4 py-2 text-white text-lg md:text-2xl font-medium hover:bg-[#ff8534]"
              >
                Get start Booking
              </motion.button>
            </Link>
          </div>
        </div>






        {/* Right side form */}
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="from-bg relative w-full md:w-1/2 h-[600px] md:h-[500px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <form
            onSubmit={handleSubmit}
            className="absolute inset-0 bg-teal-500/20 text-white text-center flex flex-col justify-center items-center px-4"
          >
            <h2 className="text-2xl md:text-3xl mb-6 mt-[-50px] md:mt-0">Get Booking</h2>

            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="name"
              placeholder="Your name"
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              required
            />

            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              required
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="Your Email"
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              required
            />

            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              name="price"
              placeholder="Total price:"
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              required
            />

            <input
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="date"
              name="date"
              className="input-bg w-[70%] p-3 placeholder:text-2xl text-[#000] outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              required
            />

            <button
              onClick={() => setSubmitColor(!submiCplor)}
              type="submit"
              className={`${
                submiCplor
                  ? "bg-red-600 py-2 px-6 text-lg md:text-2xl font-semibold w-[70%]"
                  : "bg-[#00d2d3] py-2 px-6 text-lg md:text-2xl font-semibold w-[70%]"
              }`}
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
