

export const Login = () => {
  return (
    <div className="bg-[red] overflow-hidden">


<div className="md:gap-x-5  md:w-[90%]  h-screen md:flex container mx-auto justify-center items-center">
 
{/*   
<div className="text-div  relative  w-full text-center md:w-[99%] h-[600px]  md:h-[500px] overflow-hidden ">
  <div className="absolute inset-0 bg-[#000] bg-opacity-60"></div>


<div className="absolute inset-0 ">
<h2 className="md:mt-9 mt-7 text-2xl md:text-3xl md:font-extrabold text-[#fff]">someday is now.!</h2>
<p className="  text-lg md:text-lg md:text-left md:p-9 text-[#fff] font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel provident eum cumque vitae veniam nobis, ratione voluptates velit omnis culpa quae optio. Illum eum cumque dolorum explicabo officiis <br /><br /> exercitationem!
 ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel provident eum cumque vitae veniam nobis, ratione voluptates velit omnis culpa quae optio. Illum eum cumque dolorum explicabo officiis exercitationem! 
</p>
 
<button className="mt-5 md:mt-0 text-lg md:text-2xl font-medium bg-[#d35400] px-2 py-2 md:px-4 md:py-2 hover:bg-[#ff8534] text-[#fff]">Get strat Booking</button>
</div>

</div> */}



<div className=" mt-3 relative from-bg w-full from-div md:w-[50%] overflow-hidden h-[600px] md:h-[500px] ">
   <div className="absolute inset-0 bg-[#000] bg-opacity-60"></div>

<form className="   bg-[#38ada9]/20 absolute inset-0   text-center text-[#fff]">
   <h2 className="text-xl md:text-3xl mt-8 p-6">Get Login</h2>

<input className="block mx-auto w-[70%] p-3 placeholder:text-2xl outline-0 border-2  focus:border-[#b71540] rounded-sm input-bg "
 type="text" name="text" placeholder="Your name"  /> <br />


<input className="input-bg block mx-auto w-[70%] p-3 placeholder:text-2xl outline-0  rounded-sm border-2  focus:border-[#b71540]"
 type="email" name="email" placeholder="Your Email" /> <br />

<input className="input-bg block mx-auto w-[70%] p-3 placeholder:text-2xl outline-0 border-2  rounded-sm focus:border-[#b71540]"
type="password" name="password" placeholder="Your Password" /> <br />

<button
 type="submit" className="bg-[#00d2d3] py-2 text-lg md:text-2xl font-semibold block mx-auto w-[70%] ">submit</button>

</form>


</div>

</div>



    </div>
  )
}
