import  {  useState } from 'react';
import VolunteerCard from './VolunteerCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BsLayoutTextSidebarReverse } from 'react-icons/bs';
import { LuLayoutGrid } from "react-icons/lu";
import VolunteersTableLayout from './VolunteersTableLayout';

const VolunteerCards = () => {
    const [volunteers,setVolunteers] = useState([]);
    const [isTableLayChange,setIsTableLayoutChange] = useState(false)
    axios.get(`${import.meta.env.VITE_api_url}/volunteer-needs`)
    .then(({data}) => setVolunteers(data))
    .catch(err => toast.error(err.message))

    return (
       <div className='w-11/12 mx-auto my-8'>
            <div className="mb-5 flex justify-between items-center  w-full rounded-none text-gray-600 border-b text-lg border-gray-500 p-3  shadow-none">
            <h1 className='capitalize font-extrabold'>Change layout and more</h1>
            {/* layout button condition */}
            <div className='flex gap-2'> 
                {
                    isTableLayChange ? <button onClick={()=>setIsTableLayoutChange(!isTableLayChange)} className='hover:text-yellow-600 link underline-none'><LuLayoutGrid
             /></button> : <button onClick={()=>setIsTableLayoutChange(!isTableLayChange)} className=' hover:text-yellow-600 link underline-none'><BsLayoutTextSidebarReverse /></button> 
                }
               
              <Link to={'/all-volunteers'}>       
        <div className="hover:link hover:text-yellow-600 ">
            See All
        </div>
            </Link>
             </div>
        </div>

        {/* layout changing condition */}
       {
        isTableLayChange ?  
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Category</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            volunteers.map(volunteer => <VolunteersTableLayout key={volunteer._id} volunteer={volunteer}></VolunteersTableLayout>)
        }
    </tbody>
  </table>
</div>
 :  
 <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-4'>
           {
            volunteers.map(volunteer => <VolunteerCard key={volunteer._id} volunteer={volunteer}></VolunteerCard>)
           }
        </div>
       }
        </div>
    );
};

export default VolunteerCards;