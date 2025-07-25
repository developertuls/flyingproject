
import React from 'react'

export const Topolidy = () => {
  const holidayData = [
    {
      img: "images/in1.jpg",
      desc: "Enjoy sunny days on the beautiful beaches of Bali."
    },
    {
      img: "images/in2.jpeg",
      desc: "Breathtaking views from the Himalayan mountains."
    },
    {
      img: "images/in3.jpeg",
      desc: "Explore the culture and nightlife of Tokyo city."
    },
    {
      img: "images/in4.jpeg",
      desc: "Adventure through the golden sands of Dubai."
    },

    {
      img: "images/in5.jpeg",
      desc: "Relax in the calm and green Amazon forest."
    },

    {
      img: "images/in5.jpeg",
      desc: "Relax in the calm and green Amazon forest."
    },
    {
      img: "images/in5.jpeg",
      desc: "Relax in the calm and green Amazon forest."
    },

    {
      img: "images/in5.jpeg",
      desc: "Relax in the calm and green Amazon forest."
    },
    {
      img: "images/in6.jpeg",
      desc: "Island vibes and ocean breeze in Maldives."
    },
    {
      img: "images/in6.jpeg",
      desc: "Island vibes and ocean breeze in Maldives."
    },
    {
      img: "images/in6.jpeg",
      desc: "Island vibes and ocean breeze in Maldives."
    },

    {
      img: "images/in6.jpeg",
      desc: "Island vibes and ocean breeze in Maldives."
    }
  ];

  return (
    <div className=" py-10 mt-9 md:mt-[80px] bg-[]">
      <div className="container mx-auto px-4">

        <h1 className="text-3xl font-bold text-center mb-10 text-[#333]">
          TOP HOLIDAY DESTINATIONS
        </h1>

        <div className="grid gap-8 md:grid-cols-3">
          {holidayData.map((item, index) => (
            <div key={index} className="bg-white transiton-all hover:shadow p-4">
              <img
                src={item.img}
                alt="destination"
                className="hover:p-3 w-full h-[200px] object-cover hover:shadow-md transition-all"
              />
              <span className="block mt-4 text-sm text-gray-700">
                {item.desc}
              </span>
              <button className='md:mt-3 mt-2  bg-[#218c74] text-white px-3 py-1'>$76MiLionHLp</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
