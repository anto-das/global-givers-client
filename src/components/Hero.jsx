import React from 'react';
import DonorsCaruasel from './DonorsCarousel';
import DonorsCarousel from './DonorsCarousel';

const Hero = () => {
    return (
        <div className="w-11/12 h-min-screen mx-auto my-8 flex justify-space-between gap-5 items-center flex-col lg:flex-row">
        <div className='w-full h-full'>
            <div className='p-5 bg-[#F7F7F7] mb-4 border-l-5 border-[#29AF8A]'>
                <h1 className='text-2xl text-[#29AF8A] font-bold uppercase'>Be come a volunteer</h1>
            </div>
            <div className='w-full h-full bg-[#F7F7F7] '>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/lXlRIqUh7Lg?si=abs-BFspQxfKxFRi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className='px-5 py-8 flex flex-col lg:flex-row md:flex-row justify-between items-center'>
                <span className='text-2xl font-bold text-gray-600 uppercase'>be a volunteer</span>
                <button className='btn border-none shadow-none bg-[#29AF8A] rounded-none text-white text-lg hover:btn hover:rounded-none hover:text-white hover:bg-[#535353] hover:text-lg hover:border-none hover:shadow-none '>JOIN US NOW</button>
            </div>
            </div>
        </div>
        <div className='w-full md:w-full lg:w-1/2 h-full'>
        <div className='p-5 bg-[#F7F7F7] mb-4 border-l-5 border-[#29AF8A]'>
              <h1 className='text-2xl text-[#29AF8A] font-bold uppercase'>Our Donors Say</h1>
          </div>
            <DonorsCarousel></DonorsCarousel>
        </div>
      </div>
    );
};

export default Hero;