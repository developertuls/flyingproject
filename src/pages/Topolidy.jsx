
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const Topolidy = () => {
  const navigate = useNavigate(); // ✅ useNavigate initialize

  const holidayData = [
    {
      img: "https://images.unsplash.com/photo-1584798448292-5e7ba13a0826?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
     
      desc: "Enjoy sunny days on the beautiful beaches of Bali.",
     
    },
    {
      img: "https://images.unsplash.com/photo-1721396109114-4ca15f095d6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
      desc: "Breathtaking views from the Himalayan mountains."
    },
    {
      img: "https://images.unsplash.com/photo-1699036024578-956f94df95f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
      desc: "Explore the culture and nightlife of Tokyo city."
    },
    {
      img: "https://images.unsplash.com/photo-1702103208265-e07e851acad3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8",
      desc: "Adventure through the golden sands of Dubai."
    },
    {
      img: "https://images.unsplash.com/photo-1658704277613-1b6a920ddf9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
      desc: "Relax in the calm and green Amazon forest."
    },
    {
      img: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      desc: "Island vibes and ocean breeze in Maldives."
    }
  ];

  return (
    <div className="py-10 mt-9 md:mt-[80px] bg-[#1B1464]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-[#fff]">
          TOP HOLIDAY DESTINATIONS
        </h1>

        <div className="grid gap-8 md:grid-cols-3">
          {holidayData.map((item, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-lg p-4  transition-all"
              onClick={() =>
                navigate(`/holiday/${index}`, {
                  state: item
                })
              }
            >
              
                <img
                  src={item.img}
                  alt="destination"
                  className="hover:scale-105 duration-150 w-full h-[200px] object-cover rounded cursor-pointer"
                />
            
              <span className="block mt-4 text-sm text-gray-700">
                {item.desc}
                
              </span>
              <button className="block mx-auto md:mx-0 mt-3 hover:bg-[#144036] font-bold bg-[#B53471] text-white px-5 py-2 rounded">
                New Booking
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
