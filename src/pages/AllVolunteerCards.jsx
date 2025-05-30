import  { useEffect, useState } from 'react';
import VolunteerCard from '../components/VolunteerCard';
import axios from 'axios';
import toast from 'react-hot-toast';

const AllVolunteerCards = () => {
    const [allVolunteers, setAllVolunteers] = useState([]);
    const [searchValue,setSearchValue] = useState('');
    // get all volunteer data from database using axios get method
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_api_url}/all-volunteers?postTitle=${searchValue}`)
    .then( ({data})=> setAllVolunteers(data))
    .catch(err => toast.err(err.message))
    },[searchValue])
    // get search input field data 
    const handleSearchFiled = e =>{
      e.preventDefault();
      const form = e.target;
      const searchPostTitle = form.search.value;
      setSearchValue(searchPostTitle);
      form.reset()
    }
    return (
        <div className='w-11/12 mx-auto py-8'>
            {/* input search field */}
         <form onSubmit={handleSearchFiled}>
             <div className="join mb-4 w-full">
  <div className='w-full'>
    <div>
      <input name='search' className="input border-[#535353] placeholder:text-lg text-lg focus:outline-[#29AF8A] join-item w-full" placeholder="Search" />
    </div>
  </div>
  <div className="">
    <button className="join-item btn border-none shadow-none bg-[#535353]  text-sm md:text-md lg:text-lg text-white w-full">Search</button>
  </div>
</div>
         </form>
{/* all volunteer cards items */}
            <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4'>
           {
            allVolunteers.map(volunteer => <VolunteerCard key={volunteer._id} volunteer={volunteer}></VolunteerCard>)
           }
        </div>
        </div>
    );
};

export default AllVolunteerCards;