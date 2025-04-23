import React from 'react';
import { NavLink } from 'react-router-dom';
import '../files/navbar.css'
import brandLogo from '../assets/earth-globe-symbol-with-heart_1308-115403.avif';
const Navbar = () => {
  const links =<>
  <NavLink to={'/'} className={'text-lg font-bold text-gray-500 uppercase'}>Home</NavLink>
  <NavLink to={'/volunteer'} className={'lg:mx-2 md:mx-2 text-lg font-bold text-gray-500 uppercase'}>Volunteer</NavLink>
  <NavLink to={'/userProfile'} className={'text-lg font-bold text-gray-500 uppercase'}>Profile</NavLink>
  </>
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
        {/* brand logo */}
<div className="flex justify-around  items-center">
<img src={brandLogo} className='w-12 border-t-4 border-r-4  border-[#29AF8A]' alt='brand-logo'/>
<h1> <span className='text-3xl text-[#29AF8A] font-bold'>Global</span><br /><span className='text-sm font-bold text-[#29AF8A]'>G i v e r s</span> </h1>
</div>
{/* navigate links */}
<div className="navbar-center hidden md:flex lg:flex">
<ul className="menu menu-horizontal px-1">
{links}
</ul>
</div>
{/* navbar user profile */}

<div className='flex items-center gap-4'>
  <button className='btn bg-[#29AF8A] rounded-none text-white text-lg hover:btn hover:rounded-none hover:text-white hover:bg-[#535353] hover:text-lg'>Donate Now</button>
{/* user profile */}
{/* <div className="dropdown dropdown-end">
<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
<div className="w-10 rounded-full">
  <img
    alt="Tailwind CSS Navbar component"
    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
</div>
</div>
<ul
tabIndex={0}
className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
<li>
  <a className="justify-between">
    Profile
    <span className="badge">New</span>
  </a>
</li>
<li><a>Settings</a></li>
<li><a>Logout</a></li>
</ul>
</div> */}

{/* menu */}
<div className="dropdown dropdown-end lg:hidden md:hidden block">
      <div tabIndex={0} role="button" className="btn btn-lg btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-46 p-2 shadow">
        {
          links
        }
      </ul>
    </div>
</div>
</div>
    );
};

export default Navbar;