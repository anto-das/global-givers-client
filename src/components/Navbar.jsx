import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../files/navbar.css'
import brandLogo from '../assets/earth-globe-symbol-with-heart_1308-115403.avif';
import { AuthContext } from '../providers/AuthProvider';
const Navbar = () => {
  const {user,handleLogout} = useContext(AuthContext)
  // console.log(user.photoURL)
  const links =<>
  <NavLink to={'/'} className={'text-lg font-bold text-gray-500 uppercase'}>Home</NavLink>
  <NavLink to={'/all-volunteers'} className={'lg:mx-2 md:mx-2 text-lg font-bold text-gray-500 uppercase'}>see-all</NavLink>
  <NavLink to={'/volunteer-posts'} className={'text-lg font-bold text-gray-500 uppercase lg:mr-2 md:mr-2'}>Volunteer-post</NavLink>
  </>
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
        {/* brand logo */}
<div className="flex justify-around  items-center">
<img src={brandLogo} className=' w-10 md:lg:w-12 lg:w-12 rounded-full border-t-4 border-r-4  border-[#29AF8A]' alt='brand-logo'/>
<h1> <span className='text-2xl md:text-3xl lg:text-3xl text-[#29AF8A] font-bold'>Global</span><br /><span className='text-xs md:text-sm lg:text-sm font-bold text-[#29AF8A]'>G i v e r s</span> </h1>
</div>
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
          <Link to={'/my-add-posts'} className='capitalize text-lg hover:link hover:text-blue-400 font-semibold text-gray-500'>my-posts</Link>
        <Link to={'/my-requests-volunteer'} className='capitalize text-lg hover:link hover:text-blue-400 font-semibold text-gray-500'>my-request</Link>
       <button onClick={handleLogout} className='text-[#e84848] rounded-none font-semibold link text-lg justify-start flex'>Logout</button>
      </ul>
    </div>
  </div>
</div> : <Link to={'/login'}> <button className='btn bg-[#29AF8A] rounded-none text-white text-lg hover:btn hover:rounded-none hover:text-white hover:bg-[#535353] hover:text-lg'>Login</button></Link>
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