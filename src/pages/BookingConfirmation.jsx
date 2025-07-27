
// BookingConfirmation.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';





const BookingConfirmation = () => {
  const location = useLocation();
  const { name, email, phone, price, date } = location.state || {};





  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 p-6 text-center">
      <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
       className="md:mt-[99px] mt-9 bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
  <h2 className="animate-bounce text-3xl font-bold text-green-600 mb-4">
  🎉 Booking Confirmed!
  </h2>
        
        
        <ul className=''>
          <li><strong className='text-xl'>Name:</strong>{name}</li>
          <li><strong className='text-xl'>Email:</strong>{email}</li>
          <li><strong className='text-xl'>Phone:</strong>{phone}</li>
          <li><strong className='text-xl'>Price:</strong>{price}</li>
          <li><strong className='text-xl'>Date:</strong>{date}</li>
         
        </ul>
        {/* <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Price:</strong> {price} amout</p>
        <p><strong>Visit Date:</strong> {date}</p>  */}
        
        
        
        
        
        
        <p className="text-gray-700 mb-6 ">
          Your booking has been successfully completed. <br />
          Thank you for using our service!
        </p>
      
      </motion.div>


        <Link to="/"
         className="font-medium mt-8 bg-green-600 text-white px-7 py-2 rounded hover:bg-green-700">
          Go to Home
        </Link>
    </div>
  );
};

export default BookingConfirmation;
