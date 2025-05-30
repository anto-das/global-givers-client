import React from 'react';

const DonorsSlide = () => {
    return (
        <div className='w-full'>
        <div className='px-5 py-8  bg-[#F7F7F7]'>
        <div className="avatar">
  <div className="w-12 rounded-full text-center">
    <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
  </div>
</div>
          <p className="text-center text-gray-500 text-lg">
         <span> **Donor Spotlight:</span> <br />
"I believe in empowering communities through action. Supporting GlobalGivers means helping real people make a real difference. It's more than charity — it's shared humanity." <br /> — <span className='text-xl font-bold'>*Ayesha Rahman, Global Donor*</span>
          </p>
        </div>
     </div>
    );
};

export default DonorsSlide;