
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const Topolidy = () => {
  const navigate = useNavigate(); // ✅ useNavigate initialize

  const holidayData = [
    {
      img: "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg",
     
      desc: "Enjoy sunny days on the beautiful beaches of Bali.",
     
    },
    {
      img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      desc: "Breathtaking views from the Himalayan mountains."
    },
    {
      img: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg",
      desc: "Explore the culture and nightlife of Tokyo city."
    },
    {
      img: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg",
      desc: "Adventure through the golden sands of Dubai."
    },
    {
      img: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      desc: "Relax in the calm and green Amazon forest."
    },
    {
      img: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      desc: "Island vibes and ocean breeze in Maldives."
    }
  ];

  return (
    <div className="py-10 mt-9 md:mt-[80px] bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-[#333]">
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
                  className="w-full h-[200px] object-cover rounded cursor-pointer"
                />
            
              <span className="block mt-4 text-sm text-gray-700">
                {item.desc}
                
              </span>
              <button className="block mx-auto md:mx-0 mt-3 hover:bg-[#144036] font-bold bg-[#218c74] text-white px-5 py-2 rounded">
                New Booking
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
