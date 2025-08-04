
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Home = () => {
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

  const [current, setCurrent] = useState(0);
  const [focusedDeparture, setFocusedDeparture] = useState(false);
  const [focusedReturn, setFocusedReturn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative min-h-screen bgg overflow-hidden "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1582360113507-e22478766daf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#130f40]/50"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10  mx-auto mt-[90px] px-4 "
      >
        <h1 className="md-text-h1  text-center hidden md:block font-bold p-5 text-white text-5xl md:text-9xl md:mt-9 leading-tight">
          Travel <span className="text-[#EA2027]">the Sky</span>
        </h1>
        <h1 className="block md:hidden text-center text-4xl text-white font-bold leading-tight">
          Travel <span className="text-[#ED4C67]">the sky</span>!
        </h1>

        <div className="mt-10 border border-[red] md:w-full   ">
          {/* Slider */}
          <div className="w-full  md:h-[90vh] h-[50vh]  overflow-hidden relative">
            <div
              className=" relative flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full relative h-full">
                  <img
                    src={slide.image}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute text-lg md:text-3xl bottom-4 md:bottom-9 left-4 bg-black bg-opacity-50 text-white px-6 py-2 md:px-9 md:py-3 rounded">
                    {slide.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="  bg-white p-6 rounded shadow-lg">
            <h2 className="book text-center text-2xl md:text-3xl font-bold text-[#0c2461] mb-4">
              Book Your Flight
            </h2>
            <motion.form
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="transition-all duration-0.4 space-y-4 shadow-md md:w-[80%] mx-auto p-9"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <input
                  type="text"
                  placeholder="Flying From"
                  className="w-full  border focus:ring-1 focus:outline-none   placeholder:pl-3 placeholder:text-xl border-gray-300 py-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Flying To"
                  className="w-full border focus:ring-1 focus:outline-none placeholder:pl-3 placeholder:text-xl border-gray-300 py-3 rounded"
                />

                <div className="relative">
                  {!focusedDeparture && (
                    <span className="text-xl  absolute left-3 top-3 text-gray-400 pointer-events-none">
                      Departure Date
                    </span>
                  )}
                  <input
                    type="date"
                    className={`focus:ring-1 focus:outline-none   w-full border border-gray-300 p-3 rounded bg-transparent ${focusedDeparture ? "text-black" : "text-transparent"}`}
                    onFocus={() => setFocusedDeparture(true)}
                    onBlur={(e) => {
                      if (!e.target.value) setFocusedDeparture(false);
                    }}
                  />
                </div>

                <div className="relative">
                  {!focusedReturn && (
                    <span className="text-xl absolute left-3 top-3 text-gray-400 pointer-events-none">
                      Return Date
                    </span>
                  )}
                  <input
                    type="date"
                    className={`focus:ring-1 focus:outline-none   w-full border border-gray-300 p-3 rounded bg-transparent ${focusedReturn ? "text-black" : "text-transparent"}`}
                    onFocus={() => setFocusedReturn(true)}
                    onBlur={(e) => {
                      if (!e.target.value) setFocusedReturn(false);
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="transition-all duration-300 hover:w-[95%] block mx-auto bg-[#307b82] w-full hover:bg-[#31afba] text-white py-4 text-2xl rounded font-semibold"
              >
                Search Flights
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
