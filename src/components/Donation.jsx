import React from 'react';
import bgImg from '../assets/image 2.jpg';
const Donation = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${bgImg})`,
  }}
>
  <div className="hero-overlay "></div>
  <div className="card bg-[#7dac7d53] w-full max-w-11/14 shrink-0 shadow-2xl">
  <h1 className="text-center uppercase text-white pt-10 text-5xl font-semibold mb-10">Make a donation now!</h1>

  <div className="w-11/14 mx-auto flex lg:justify-between lg:items-center md:justify-between md:items-center">
  <div>
  <label className='text-lg font-bold text-white uppercase'>Donation amount:</label>
  <label className="flex items-center gap-1 text-white font-bold">
    <input type="radio" name="gender" value="10" className="" />
    10$
  </label>

  <label className="flex items-center gap-1 text-white font-bold">
    <input type="radio" name="gender" value="20" className="" />
    20$
  </label>

  <label className="flex items-center gap-1 text-white font-bold">
    <input type="radio" name="gender" value="40" className="" />
    40$
  </label>
  </div>
  <div>
  <label className='text-lg font-bold text-white uppercase'>Donation amount:</label>
  <label className="flex items-center gap-1 text-white font-bold">
    <input type="radio" name="gender" value="10" className="" />
    10$
  </label>

  <label className="flex items-center gap-1 text-white font-bold">
    <input type="radio" name="gender" value="20" className="" />
    20$
  </label>

  <label className="flex items-center gap-1 text-white font-bold">
    <input type="radio" name="gender" value="40" className="" />
    40$
  </label>
  </div>
</div>
      <div className="p-12">
        <form className="grid grid-cols-2 gap-6">
        <div className='flex flex-col'>
        <input type="text" className="border placeholder:uppercase placeholder-white focus:outline-none placeholder:text-xs border-gray-300 p-5 w-full caret-white text-white"placeholder="Name" />
        </div>
         <div className='flex flex-col'>
         <input type="Email" className="border placeholder:uppercase placeholder-white focus:outline-none placeholder:text-xs border-gray-300 p-5 w-full caret-white text-white" placeholder="Email" />
         </div>
         <div className='flex flex-col col-span-2 my-4'>
         <input type="text" className="border placeholder:uppercase placeholder-white focus:outline-none placeholder:text-xs border-gray-300 p-5 w-full caret-white text-white" placeholder="I Want To Donate For" />
         </div>
       <div className='w-full col-span-2'>
       <button className="btn border-none shadow-none bg-[#29AF8A] rounded-none text-white text-lg hover:btn hover:rounded-none hover:text-white hover:bg-[#535353] hover:text-lg hover:border-none hover:shadow-none w-full">Donate Now</button>
       </div>
        </form>
      </div>
    </div>
</div>
    );
};

export default Donation;