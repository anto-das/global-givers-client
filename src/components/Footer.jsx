import React from 'react';
import brandLogo from '../assets/earth-globe-symbol-with-heart_1308-115403.avif'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineMailOutline } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import { SiGithub } from 'react-icons/si';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='bg-[#2E2E2E] p-5'>
       <div className="footer sm:footer-horizontal">
        {/* brand logo */}
       <nav>
          <Link to={'/'}>
          <div className="flex justify-around items-center">
          <img src={brandLogo} className='w-12 rounded-full border-[#29AF8A]' alt='brand-logo'/>
          <h1> <span className='text-3xl text-[#29AF8A] font-bold'>Global</span><br /><span className='text-sm font-bold text-[#29AF8A]'>G i v e r s</span> </h1>
          </div>
          </Link>
          <p className='text-[#535353] mt-2 border-b hidden lg:block md:block'>Global Givers connects donors and volunteers <br /> worldwide to support communities in need <br /> through compassion, transparency, and <br /> collective action for change.</p>
        </nav>
        {/* popular tags */}
        <nav className=''>
          <h6 className="text-xl font-bold text-base-200 uppercase">popular tags</h6>
          <div className='flex flex-row gap-2'>
            <button className="text-white hover:text-amber-300 hover:link">Global-Impact</button> <span className='text-white'>|</span> 
          <button className="text-white hover:text-amber-300 hover:link">Giving</button><span className='text-white'>|</span>
          <button className="text-white hover:text-amber-300 hover:link">Difference</button>
          </div>
          <div className='flex flex-row gap-2'>
            <button className="text-white hover:text-amber-300 hover:link">Nonprofit</button><span className='text-white'>|</span>
            <button className="text-white hover:text-amber-300 hover:link">Volunteer</button>
            </div>
          <div className='flex flex-row gap-2'>
            <button className="text-white hover:text-amber-300 hover:link">Support</button><span className='text-white'>|</span>
            <button className="text-white hover:text-amber-300 hover:link">Communities</button><span className='text-white'>|</span>
            <button className="text-white hover:text-amber-300 hover:link">Kindness</button>
            </div>
          <div>
            <button className="text-white hover:text-amber-300 hover:link">Change-Makers</button>
            </div>
        </nav>
        {/* contact us */}
        <nav className='w-full flex justify-start items-center'>
      <div className=''>
          <h2 className="text-xl font-bold text-base-200 uppercase text-start">contact us</h2>
          <div className="divider border-b border-[#535353]"></div>
            <p className='text-[#535353] justify-start  hover:text-white flex items-center gap-2'> < IoLocationSharp/> Narayanganj,Dhaka,Bangladesh</p>
            <p className='text-[#535353] justify-start  hover:text-white flex items-center gap-2 py-1'> <MdOutlineMailOutline /> ahirdas4455@gmail.com </p>
            <p className='text-[#535353] justify-start hover:text-white flex items-center gap-2'> <BsTelephoneFill/> +8801240879318</p>
        <div className='flex justify-start pt-1 items-center gap-4'>
        <a className='text-[#535353] hover:text-white text-lg' href=""><FaFacebookF /></a>
        <a className='text-[#535353] hover:text-white text-lg' href=""><IoLogoYoutube /></a>
        <a className='text-[#535353] hover:text-white text-lg' href=""><SiGithub /></a>
        <a className='text-[#535353] hover:text-white text-lg' href=""><IoLogoTwitter /></a>
       </div>
        </div>
        </nav>
       </div>
        <p className='text-[#535353] font-bold pt-2 text-start'>COPYRIGHTS &copy; 2025 BY AHIR ANTO. ALL RIGHT RESERVED.</p>
      </footer>
    );
};

export default Footer;