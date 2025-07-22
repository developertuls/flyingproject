
import React from 'react'

export const Foterhome = () => {
 return (
    <footer className="text-center md:text-center-0 bg-[#1B1464] text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">YourBrand</h2>
          <p className="text-sm text-gray-400">
            Your one-stop solution for amazing travel experiences. Explore destinations, book tours, and plan your holiday today.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Destinations</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: info@yourbrand.com</li>
            <li>Phone: +880 1989850948</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social */}
        <div className='mx-auto '>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className=" flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Designe by Maruf All rights reserved .
      </div>
    </footer>
  );
}
