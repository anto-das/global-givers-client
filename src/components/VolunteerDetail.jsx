import { GrOrganization } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange, MdOutlineMarkEmailUnread } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const VolunteerDetail = () => {
  const {user} = useContext(AuthContext)
     const loadingData= useLoaderData();
     const {_id,description,deadline,category,postTitle,thumbnail,organizerName,organizerEmail,location,volunteersNeeded} =loadingData;
    return (
             <div className="card p-4 w-11/14 mx-auto my-8 md:card-side lg:card-side bg-base-100 shadow-sm">
  <figure className="w-full md:w-1/2 lg:w-1/2">
    <img
      src={thumbnail}
      alt={postTitle}
      className="w-full" />
  </figure>
  <div className="card-body">
    <h2 className="flex justify-between items-center text-lg lg:text-xl text-black">{postTitle} <span className={`text-sm md:text-normal lg:text-md py-1 px-1 md:px-2 lg:px-3 rounded capitalize lg:text-lg ${category === 'health care' && 'text-blue-400 bg-blue-100/60'}
    ${category === 'education' && 'text-amber-500 bg-amber-100/60'}
    ${category === 'social service' && 'text-green-400 bg-green-100/60'}
    ${category === 'animal welfare' && 'text-pink-500 bg-pink-100/60'}`}>{category}</span></h2>
    <span className="text-sm flex gap-1 items-center">Number of Volunteer need: <span className="font-bold mt-[#4px]">{volunteersNeeded}</span> </span>
    <span className="flex items-center gap-1"><IoLocationSharp /> {location} </span>
    <span className="flex items-center gap-1"><GrOrganization /> {organizerName} </span>
    <span className="flex items-center gap-1"><MdOutlineMarkEmailUnread /> {organizerEmail} </span>
    <span className="flex items-center gap-1"><MdDateRange />
{deadline} </span>
    <p>{description}</p>
    <div className="card-actions justify-center">
      {
        organizerEmail !== user?.email && <button  onClick={()=>document.getElementById('my_modal_4').showModal()} className="btn border-none shadow-none bg-[#29AF8A] rounded-none text-white text-lg hover:btn hover:rounded-none hover:text-white hover:bg-[#535353] hover:text-lg hover:border-none hover:shadow-none w-full">Be a Volunteer</button>
      }
    </div>
  </div>
  {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_4" className="modal">
<Modal key={_id} loadingData={loadingData}></Modal>
</dialog>
</div>
    );
};

export default VolunteerDetail;