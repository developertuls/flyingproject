
import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom"; 
import { HoverZoom } from "../comonents/HoverZoom";
export const HolidayDetails = () => {
  const { id } = useParams();
  const holidayData = [

  {
    img: "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg",
    desc: "Bali is a tropical paradise known for its lush rice terraces, vibrant beach life, and traditional Balinese temples. Ideal for sun-seekers, surfers, and cultural explorers.",
    price: "$799"
  },
  {
    img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    desc: "The Himalayas offer breathtaking views, spiritual monasteries, and high-altitude trekking adventures in nature's purest form.",
    price: "$950"
  },
  {
    img: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg",
    desc: "Tokyo blends ultra-modern living with rich tradition. Explore neon-lit streets, sushi bars, ancient shrines, and tech culture.",
    price: "$1,150"
  },
  {
    img: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg",
    desc: "Dubai offers luxury shopping, stunning architecture, and desert safaris — a fusion of modern glam and Arabian charm.",
    price: "$1,050"
  },
  {
    img: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
    desc: "Explore the untouched beauty of the Amazon rainforest with river cruises, jungle treks, and unmatched biodiversity.",
    price: "$870"
  },
  {
    img: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
    desc: "The Maldives is a peaceful island paradise with overwater villas, snorkeling, and unforgettable sunsets over turquoise waters.",
    price: "$1,300"
  }


  ];

  const holiday = holidayData[parseInt(id, 10)];



  return (
    
    <div className=" bg-gray-50 py-10 px-4 overflow-hidden">
     
      <motion.div
    initial={{ opacity: 0, x: 100 }} // 
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    viewport={{ once: true }}
    className="overflow-hidden md:flex justify-center items-center  max-h-3xl mx-auto mt-20 bg-white shadow-lg rounded p-6 text-center">
       

        {/* ✅ HoverZoom component */}
      
        <HoverZoom src={holiday.img} alt="Holiday Image" />
         <div> 
        <p className="transition-all duration-5.5 mt-6 text-xl font-semibold text-green-700 mb-4">
        Booking Price: {holiday.price}
        </p>

        <p className="font-semibold text-gray-700 text-lg mb-6 mt-4 p-4">{holiday.desc}</p>

        <Link to={'/booking'}><button className="font-semibold md:text-lg bg-green-600 text-white px-7 py-3 rounded hover:bg-green-800">
          New Booking
        </button></Link>
        </div>

      </motion.div>
  


    </div>
  );
};
