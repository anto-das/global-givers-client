import React from 'react';
import brandLogo from '../assets/earth-globe-symbol-with-heart_1308-115403.avif'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineMailOutline } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import { SiGithub } from 'react-icons/si';
const Footer = () => {
    return (
        <footer className='bg-[#2E2E2E] p-10'>
       <div className="footer sm:footer-horizontal p-10">
        {/* brand logo */}
       <nav>
          <div className="flex justify-around gap-2 items-center">
          <img src={brandLogo} className='w-12 rounded-full border-[#29AF8A]' alt='brand-logo'/>
          <h1> <span className='text-3xl text-[#29AF8A] font-bold'>Global</span><br /><span className='text-sm font-bold text-[#29AF8A]'>G i v e r s</span> </h1>
          </div>
          <p className='text-[#535353] mt-2 border-b'>Global Givers connects donors and volunteers <br /> worldwide to support communities in need <br /> through compassion, transparency, and <br /> collective action for change.</p>
        </nav>
        {/* popular tags */}
        <nav >
          <h6 className="text-xl font-bold text-base-200 uppercase">popular tags</h6>
          <div className='flex lg:flex-row md:flex-row flex-col gap-2'>
            <button className="btn rounded-none bg-[#535353] text-gray-300 border-none shadow-none hover:text-white font-sm hover:bg-[#29AF8A]">Global-Impact</button>
          <button className=" btn rounded-none bg-[#535353] text-gray-300 border-none shadow-none hover:text-white font-sm hover:bg-[#29AF8A]">Giving</button>
          <button className="btn rounded-none bg-[#535353] text-gray-300 border-none shadow-none hover:text-white font-sm hover:bg-[#29AF8A]">Difference</button>
          </div>
          <div className='flex lg:flex-row md:flex-row flex-col gap-2'>
            <button className="btn rounded-none bg-[#535353] text-gray-300 border-none shadow-none hover:text-white font-sm hover:bg-[#29AF8A]">Nonprofit</button>
            <button className="btn rounded-none bg-[#535353] text-gray-300 border-none shadow-none hover:text-white font-sm hover:bg-[#29AF8A]">Volunteer</button>
            </div>
          <div className='flex lg:flex-row md:flex-row flex-col gap-2'>
            <button className="btn rounded-none bg-[#535353] text-gray-300 border-none shadow-none hover:text-white font-sm hover:bg-[#29AF8A]">Support</button>
            <button className="btn rounded-none bg-[#535353] text-gray-300 border-none shadow-none hover:text-white font-sm hover:bg-[#29AF8A]">Communities</button>
            <button className="btn rounded-none bg-[#535353] text-gray-300 border-none shadow-none hover:text-white font-sm hover:bg-[#29AF8A]">Kindness</button>
            </div>
          <div>
            <button className="btn rounded-none bg-[#535353] text-gray-300 border-none shadow-none hover:text-white font-sm hover:bg-[#29AF8A]">Change-Makers</button>
            </div>
        </nav>
        {/* recent posts */}
        <nav className='w-full'>
          <h6 className="text-xl font-bold text-base-200 uppercase">Recent Post</h6>
         <p className='border-b text-[#535353] py-4 w-full hover:text-white flex items-center gap-2'><MdOutlineKeyboardDoubleArrowRight/> Our Volunteers</p>
         <p className='border-b text-[#535353] py-4 w-full hover:text-white flex items-center gap-2'> <MdOutlineKeyboardDoubleArrowRight />Giving</p>
         <p className='border-b text-[#535353] py-4 w-full hover:text-white flex items-center gap-2'> <MdOutlineKeyboardDoubleArrowRight />Audio</p>
         <p className='border-b text-[#535353] py-4 w-full hover:text-white flex items-center gap-2'> <MdOutlineKeyboardDoubleArrowRight />Video</p>
        </nav>
       </div>
      
        <div className=''>
          <h2 className="text-xl font-bold text-base-200 uppercase text-center">contact us</h2>
          <div className="divider border-b border-[#535353]"></div>
            <p className='text-[#535353] justify-center pt-2 hover:text-white flex items-center gap-2'> < IoLocationSharp/> Narayanganj,Dhaka,Bangladesh</p>
            <p className='text-[#535353] justify-center py-2 hover:text-white flex items-center gap-2'> <MdOutlineMailOutline /> ahirdas4455@gmail.com </p>
            <p className='text-[#535353] justify-center hover:text-white flex items-center gap-2'> <BsTelephoneFill/> +8801240879318</p>
        </div>
        <div className='flex justify-center items-center gap-5 py-5'>
        <a className='text-[#535353] hover:text-white text-lg' href=""><FaFacebookF /></a>
        <a className='text-[#535353] hover:text-white text-lg' href=""><IoLogoYoutube /></a>
        <a className='text-[#535353] hover:text-white text-lg' href=""><SiGithub /></a>
        <a className='text-[#535353] hover:text-white text-lg' href=""><IoLogoTwitter /></a>
       </div>
        <p className='text-center text-[#535353] font-bold'>COPYRIGHTS &copy; 2025 BY AHIR ANTO. ALL RIGHT RESERVED.</p>
      </footer>
    );
};

export default Footer;