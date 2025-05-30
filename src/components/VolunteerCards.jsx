import React, { useState } from 'react';
import VolunteerCard from './VolunteerCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const VolunteerCards = () => {
    const [volunteers,setVolunteers] = useState([]);

    axios.get(`${import.meta.env.VITE_api_url}/volunteer-needs`)
    .then(({data}) => setVolunteers(data))
    .catch(err => toast.error(err.message))

    // fetch(`${import.meta.env.VITE_api_url}/volunteer-needs`)
    // .then(res => res.json())
    // .then(data => setVolunteers(data))
    return (
        <div className='w-11/12 mx-auto my-8'>
        <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-4'>
           {
            volunteers.map(volunteer => <VolunteerCard key={volunteer._id} volunteer={volunteer}></VolunteerCard>)
           }
        </div>
        {/* see all button */}
            <Link to={'/all-volunteers'}>       
        <div className="mt-5 w-full btn rounded-none text-white bg-[#535353] text-lg border-none shadow-none">
            See All
        </div>
            </Link>
        </div>
    );
};

export default VolunteerCards;