
import  { useEffect ,useState} from 'react'
import { motion } from 'motion/react';





function Slider() {
 const [current, setCurrent] = useState(0);
 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);






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
    {
      image:
        "https://www.stuff.co.nz/media/images/9Tzi8ywRz924XE3uHaD6DfGZQfjEdZd7oKlsiR53VLHvSZExpMzuRmKdwHbkL9PkkQ5yn4iGOMQNo5jBcDKr+fVq57khvBlTgahLBPx0BvPCtneyVECthyLnRvY4Yz64UrDyd09szp1CbA1qAeJZpHowanIr3ZBBkm8tRPwRzu5zIN7+GgEMBERX8uBlj9FhWpvXCaBaS+S6VT6IInvE5Q==",
      text: "Korea",
    },
    {
      image:
        "https://acko-cms.ackoassets.com/Places_to_visit_in_Jordan_8edeb4aaa5.png",
      text: "Jordan",
    },
    {
      image:
        "https://www.investasian.com/wp-content/uploads/Indonesia-Real-Estate-The-Ultimate-Guide.png",
      text: "Indonesia",
    },
    {
      image:
        "https://images.unsplash.com/photo-1740253199343-b8ff11d70451?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Kuwait",
    },
    {
      image:
        "https://media.istockphoto.com/id/2210099012/photo/chhatrapati-shivaji-maharaj-terminus-station-illuminated-at-twilight-in-mumbai-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=wNVfvn_vq9g57z-QOmuGgnakDtHmGSMXqurmQHwHKtk=",
      text: "Mumbai",
    },
  ];

  return (
   <div className="w-full ">
          {/* Slider */}
          <motion.div
          initial={{ opacity: 0, x: 1000 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
           className="shadow-md shadow-[#f7f4f4] md:h-[90vh] h-[50vh]  overflow-hidden ">
            <div
              className="w-full  relative flex  transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full relative h-full">
                  <img
                    src={slide.image}
                    alt={`Slide ${index}`}
                    className="w-full h-[90vh] object-cover opacity-70"
                  />
                  <div className="absolute text-lg md:text-3xl bottom-4 md:bottom-9 left-4 bg-black bg-opacity-50 text-white px-6 py-2 md:px-9 md:py-3 rounded">
                    {slide.text}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

     
        </div>
  )
}

export default Slider