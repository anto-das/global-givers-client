import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerCard = ({volunteer}) => {
    const {_id,description,deadline,category,postTitle,thumbnail} = volunteer;
    return (
        <div className="border border-[#D7D7D7] hover:border-[#29AF8A] bg-base-300 shadow-sm">
        <figure>
          <img
            src={thumbnail}
            alt={postTitle}
            className='h-48 w-full p-5' />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{postTitle}</h2>
          <p className='text-gray-700 py-2'>{description.substring(0,76)}...</p>
          <div className='w-full border flex justify-around items-center border-[#D7D7D7] py-3'>
            <div>
               <span className='text-gray-500 capitalize'>category</span> <br />
                <span className={`text-xs rounded capitalize lg:text-lg ${category === 'health care' && 'text-blue-400 bg-blue-100/60'}
    ${category === 'education' && 'text-amber-500 bg-amber-100/60'}
    ${category === 'social service' && 'text-green-400 bg-green-100/60'}
    ${category === 'animal welfare' && 'text-pink-500 bg-pink-100/60'}`}>{category}</span>
            </div>
            <div>
            <span className='text-gray-500 capitalize'>deadline</span> <br />
            <span className='text-xl capitalize'>{deadline}</span>
            </div>
          </div>
          <Link to={`/volunteers/${_id}`} className="card-actions justify-center w-full">
            <button className="btn border-none shadow-none bg-[#29AF8A] rounded-none text-white text-lg hover:btn hover:rounded-none hover:text-white hover:bg-[#535353] hover:text-lg hover:border-none hover:shadow-none w-full">View Details</button>
          </Link>
        </div>
      </div>
    );
};

export default VolunteerCard;