
import React from 'react';


export const Bookingthe = () => {
  return (
    <div className="bg-[#f6f4f4] min-h-screen py-10 text-[#000]">
      <h1 className="text-center text-[#000] text-2xl md:text-4xl font-bold mb-10">Testimonials</h1>

      <div className="gap-x-5 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
        {/* Card 1 */}
        <div className="relative  w-full h-[300px] rounded-lg flex flex-col items-center justify-center text-white">
          <div className="busy-1 absolute -top-8 w-[100px] h-[100px] rounded-full"></div>
          <h2 className="mt-16 font-bold text-[#000] text-2xl">MARUF De.</h2>
          <span className='text-[#000] p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis accusantium, fuga quae facere aspernatur.</span>
        </div>

        {/* Card 2 */}
        <div className="relative  w-full h-[300px] rounded-lg flex flex-col items-center justify-center text-white">
          <div className="busy-2 absolute -top-8 w-[100px] h-[100px] rounded-full"></div>
          <h2 className="mt-16 font-bold text-2xl text-[#000]">Humte</h2>
          <span className='text-[#000] p-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, dolor tempora minima nam est pariatur?</span>
        </div>

        {/* Card 3 */}
        <div className="relative  w-full h-[300px] rounded-lg flex flex-col items-center justify-center text-white">
          <div className="busy-3 absolute -top-8 w-[100px] h-[100px] rounded-full"></div>
          <h2 className="mt-16 font-bold text-2xl text-[#000]">ILR</h2>
          <span className='text-[#000] p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, consequatur provident dolores pariatur corrupti quo!</span>
        </div>

        {/* Card 4 */}
        <div className="relative  w-full h-[300px] rounded-lg flex flex-col items-center justify-center text-white">
          <div className="busy-4 absolute -top-8 w-[100px] h-[100px] rounded-full"></div>
          <h2 className="mt-16 font-bold text-center px-4 text-[#000] text-2xl">orame</h2>
          <span className='text-[#000] p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptas earum dolorum tempore itaque velit.</span>
        </div>

        {/* Card 5 */}
        <div className="relative  w-full h-[300px] rounded-lg flex flex-col items-center justify-center text-white">
          <div className="busy-5 absolute -top-8 w-[100px] h-[100px] rounded-full"></div>
          <h2 className="mt-16 font-bold text-[#000] text-2xl">UIo</h2>
          <span className='p-4 text-[#000]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis culpa voluptatem vitae corrupti, architecto quae.</span>
        </div>

        {/* Card 6 */}
        <div className="relative  w-full h-[300px] rounded-lg flex flex-col items-center justify-center text-white">
          <div className="busy-6 absolute -top-8 w-[100px] h-[100px] rounded-full"></div>
          <h2 className="mt-16 font-bold text-[#000]">wen</h2>
          <span className='text-[#000] p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quod aspernatur inventore dolor cum expedita.</span>
        </div>
      </div>
    </div>
  );
};
