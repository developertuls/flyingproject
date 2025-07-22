export const Login = () => {
  return (
    <div className=" min-h-screen py-10">
      <div className="container mx-auto flex flex-col md:flex-row md:gap-x-5 md:w-[90%] justify-center items-stretch px-4">

        {/* Left side text */}
        <div className="text-div relative w-full md:w-[99%] h-[600px] md:h-[500px] overflow-hidden mb-5 md:mb-0">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <div className="absolute inset-0 p-4 md:p-9 text-white text-center md:text-left">
            <h2 className="mt-7 md:mt-9 text-2xl md:text-3xl font-extrabold">someday is now.!</h2>
            <p className="mt-4 text-lg font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel provident eum cumque vitae veniam nobis, ratione voluptates velit omnis culpa quae optio. Illum eum cumque dolorum explicabo officiis.<br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel provident eum cumque vitae veniam nobis.
            </p>
            <button className="mt-6 bg-[#d35400] px-4 py-2 text-white text-lg md:text-2xl font-medium hover:bg-[#ff8534]">
              Get start Booking
            </button>
          </div>
        </div>

        {/* Right side form */}
        <div className="from-bg relative w-full md:w-1/2 h-[600px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <form className="absolute inset-0 bg-teal-500/20 text-white text-center flex flex-col justify-center items-center px-4">
            <h2 className="text-xl md:text-3xl mb-6">Get Login</h2>

            <input
              className="input-bg w-[70%] p-3 placeholder:text-2xl outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="text" name="text" placeholder="Your name"
            />

            <input
              className="input-bg w-[70%] p-3 placeholder:text-2xl outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="email" name="email" placeholder="Your Email"
            />

            <input
              className="input-bg w-[70%] p-3 placeholder:text-2xl outline-0 border-2 focus:border-[#b71540] rounded-sm mb-4"
              type="password" name="password" placeholder="Your Password"
            />

            <button
              type="submit"
              className="bg-[#00d2d3] py-2 px-6 text-lg md:text-2xl font-semibold w-[70%]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

