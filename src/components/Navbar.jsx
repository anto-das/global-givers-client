import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../files/navbar.css'
import brandLogo from '../assets/earth-globe-symbol-with-heart_1308-115403.avif';
import { AuthContext } from '../providers/AuthProvider';
const Navbar = () => {
  const {user,handleLogout} = useContext(AuthContext)
  // theme controlling 
  const [theme,setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(()=>{
    const root = document.documentElement;
    if(theme ==='light'){
      root.classList.add('bg-gray-900')
    }else{
      root.classList.remove('bg-gray-900')
    }
    localStorage.setItem('theme',theme)
  },[theme])
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  // //console.log(user.photoURL)
  const links =<>
  <li> <NavLink to={'/'} className={'text-normal font-bold text-gray-500 uppercase'}>Home</NavLink></li>
 <li> <NavLink to={'/all-volunteers'} className={'text-normal font-bold text-gray-500 uppercase'}>see-all</NavLink></li>
 <li> <NavLink to={'/volunteer-posts'} className={'text-normal font-bold text-gray-500 uppercase'}>add-volunteer</NavLink></li>
 {/* theme control */}
     <li>
       <button className='block lg:hidden md:hidden'>
     <label className="toggle text-base-content">
  <input onClick={toggleTheme} type="checkbox" value="synthwave" className="theme-controller"/>
  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
</label>
  </button>
     </li>
  </>
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
        {/* brand logo */}
<Link to={"/"}>
<div className="flex justify-around  items-center">
<img src={brandLogo} className=' w-10 md:lg:w-12 lg:w-12 rounded-full border-t-4 border-r-4  border-[#29AF8A]' alt='brand-logo'/>
<h1> <span className='text-2xl md:text-3xl lg:text-3xl text-[#29AF8A] font-bold'>Global</span><br /><span className='text-xs md:text-sm lg:text-sm font-bold text-[#29AF8A]'>G i v e r s</span> </h1>
</div>
</Link>
{/* navigate links */}
<div className="navbar-center hidden md:flex lg:flex">
<ul className="menu menu-horizontal px-1">
{links}
</ul>
</div>
{/* navbar user profile */}

<div className='flex items-center gap-4'>
{
  user ? <div className="navbar">
  <div className="flex-none">
    <div className="dropdown dropdown-end">
    </div>

    <div className="dropdown dropdown-end relative group  inline-block">

       {/* tooltip content */}
           <div className="absolute hidden group-hover:block mt-2 p-3 bg-white text-gray-700 text-sm rounded shadow-lg z-10 right-12 top-7">
    <p>{user?.displayName}</p>
    {/* logout btn */}
    <button onClick={handleLogout} className='text-[#e84848] rounded-none font-semibold link text-lg'>Logout</button>
  </div><div tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div role="button" className="w-10 rounded-full">
          <img
            src={user.photoURL} 
            alt={user.displayName}
           />
        </div>
      </div>
      {/* clicking user profile then show the link of move to different route */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><Link to={'/my-add-posts'} className='capitalize text-[16px] font-semibold'>my posts</Link></li>
        <li><Link to={'/my-requests-volunteer'} className='capitalize text-[16px] font-semibold'>my request</Link></li>
        <li>
          <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" onClick={toggleTheme} value="synthwave" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
        </li>
       <li><button onClick={handleLogout} className='hover:text-[#e84848] text-[16px] font-semibold justify-center flex'>Logout</button></li>
      </ul>
    </div>
  </div>
</div> : <div className='flex justify-center items-center gap-2'>
  <Link to={'/login'}> <button className='btn bg-[#29AF8A] rounded-none text-white text-lg hover:btn hover:rounded-none hover:text-white hover:bg-[#535353] hover:text-lg'>Login
  </button></Link>
  {/* theme control button */}
  <button className='hidden lg:block md:block'>
     <label className="toggle text-base-content">
  <input onClick={toggleTheme} type="checkbox" value="synthwave" className="theme-controller"/>
  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
</label>
  </button>
</div>
}


{/* menu */}
<div className="dropdown  dropdown-end lg:hidden md:hidden block">
      <div tabIndex={0} role="button" className=" hover:text-[#29af82] p-2">
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