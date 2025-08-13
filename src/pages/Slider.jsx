
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Slider() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1543773819-62742579ede6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Dubai",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1697730269884-629ccf615721?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Saudi Arabia",
    },
    {
      image:
        "https://media.istockphoto.com/id/185107025/photo/airplane-in-the-sky.jpg?s=612x612&w=0&k=20&c=rbSuRHJq1LWskEZY-txNs3ZzjMpejO6Uews0PErBflI=",
      text: "Explore the World with Comfort",
    },
    // বাকিগুলো...
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full overflow-hidden relative md:h-[90vh] h-[50vh] shadow-md shadow-[#f7f4f4]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src={slides[current].image}
            alt={slides[current].text}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute bottom-4 md:bottom-9 left-4 bg-black bg-opacity-50 text-white px-6 py-2 md:px-9 md:py-3 rounded text-lg md:text-3xl">
            {slides[current].text}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Slider;
