import  { useContext,} from 'react';
import { AuthContext } from '../providers/AuthProvider';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { compareAsc } from 'date-fns';
const Modal = ({loadingData}) => {
    const {_id,description,deadline,category,postTitle,thumbnail,organizerName,organizerEmail,location,volunteersNeeded}  = loadingData;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleFormRequest = async e =>{
      e.preventDefault()
       const form = e.target;
      const requestOrganizerName = form.organizer_name.value;
      const requestOrganizerEmail = form.organizer_email.value;
      const requestThumbnail = form.thumbnail.value;
      const requestPostTitle = form.post_title.value;
      const requestLocation = form.location.value;
      const requestCategory = form.category.value;
      const requestDeadline = form.deadline.value;
      const requestVolunteersNeeded = parseInt(form.volunteer_number.value);
      const requestDescription = form.description.value;
      const volunteerName = form.volunteer_name.value;
      const volunteerEmail = form.volunteer_email.value;
      const volunteerSuggestion = form.suggestion.value;
      const requestId = _id;

      const formData = {requestId,requestOrganizerName,requestOrganizerEmail,requestThumbnail,requestPostTitle,requestLocation,requestCategory,requestDeadline,requestVolunteersNeeded,requestDescription,volunteerName,volunteerEmail,volunteerSuggestion};

      // // deadline crossed validation
      // if(compareAsc(new Date(),new Date(deadline))===1){
      //  return toast.error("Deadline crossed request forbidden")
      // }
      // send the data client to server-side
      try{
        const {data} = await axios.post(`${import.meta.env.VITE_api_url}/volunteer-requests`,formData)
         if(data.acknowledged){
          navigate('/')
           return toast.success("Your volunteer data save in the DB successfully")
          }
      }catch(err){
          navigate('/')
       toast.error(err.response.data)
      }
    }
    return (
         <div className="modal-box mx-auto w-11/12">
    <div className="modal-action">
          <form onSubmit={handleFormRequest} className="fieldset">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                 {/* organizer name field*/}
                <div>
                <label className="label text-lg" htmlFor='organizer name'>Organizer Name</label>
                <input 
                defaultValue={organizerName}
                disabled={true}
                 id='organizer name'
                  name='organizer_name' 
                  type="email"
                   className="input  disabled:text-black disabled:bg-white disabled:border-[#d7d7d7] py-2 text-lg w-full" 
                   placeholder="organizer name"
                    />
                </div>
                   {/* organizer email field*/}
                <div>
                <label className="label text-lg">Organizer Email</label>
                <input
                  defaultValue={organizerEmail}
                  disabled
                 name='organizer_email'
                  type="email" 
                  className="input disabled:text-black disabled:bg-white disabled:border-[#d7d7d7]  py-2 text-lg w-full" placeholder="organizer name" />
                </div>
                    {/* thumbnail field*/}
                <div>
                <label className="label text-lg" htmlFor='thumbnail'>Thumbnail</label>
                <input defaultValue={thumbnail} disabled id='thumbnail' name='thumbnail' type="url" className="input py-2 text-lg w-full  disabled:text-black disabled:bg-white disabled:border-[#d7d7d7]" placeholder="Thumbnail"/>
                </div>
                {/* post title field*/}
                  <div>
                  <label className="label text-lg" htmlFor='post-title'>Post Title</label>
                  <input defaultValue={postTitle} disabled id='post-title' name='post_title' type="text" className="input text-lg w-full disabled:text-black disabled:bg-white disabled:border-[#d7d7d7]" placeholder="Post Title" />
                  </div>
                {/* location field*/}
                  <div>
                  <label className="label text-lg" htmlFor='location'>Location</label>
                  <input defaultValue={location} disabled id='location' name='location' type="text" className="input text-lg w-full disabled:text-black disabled:bg-white disabled:border-[#d7d7d7]" placeholder="Location" />
                  </div>
                {/* category field*/}
                  <div>
                  <label className="label text-lg" htmlFor='category'>Category</label><br />
                 <select 
                  id="category"
                  name="category"
                  defaultValue={category}
                  disabled
                  className='border border-[#D7D7D7] p-1.5 input rounded-sm text-lg text-black w-full disabled:text-black disabled:bg-white disabled:border-[#d7d7d7]'
                  
                  >
                    <option  value="health care">Health care </option>
                    <option value="education">Education</option>
                    <option value="social service">Social service</option>
                    <option value="animal welfare">Animal welfare</option>
                  </select>
                  </div>
                    {/* deadline field*/}
                    <div className='flex flex-col'>
                  <label className="label text-lg">Deadline</label>
                  <input
                  defaultValue={deadline}
                  disabled
                  className='border border-[#d7d7d7] input p-1.5 text-lg rounded-sm w-full disabled:text-black disabled:bg-white disabled:border-[#d7d7d7]'
                  name='deadline'/>
                  </div>
                  {/* how much number of volunteer need */}
                  <div>
                  <label className="label text-lg" htmlFor='volunteer'>Volunteer No.</label>
                  <input defaultValue={volunteersNeeded} disabled id='volunteer' name='volunteer_number' type="number" className="input text-lg w-full disabled:text-black disabled:bg-white disabled:border-[#d7d7d7]" placeholder="number of volunteer" />
                  </div>
                    </div>
                    {/* description field */}
                     <fieldset className="fieldset">
          <legend className="label text-lg">Description</legend>
          <textarea defaultValue={description} disabled className="textarea h-24 w-full disabled:text-black disabled:bg-white disabled:border-[#d7d7d7]" name='description' placeholder="Text your details" ></textarea>
        </fieldset>
        {/* volunteer name field */}
        <div>
                <label className="label text-lg" htmlFor='volunteer name'>Volunteer Name</label>
                <input 
                defaultValue={user?.displayName}
                disabled={true}
                 id='volunteer name'
                  name='volunteer_name' 
                  type="email"
                   className="input  disabled:text-black disabled:bg-white disabled:border-[#d7d7d7] py-2 text-lg w-full" 
                   placeholder="volunteer name"
                    />
                </div>
                {/* volunteer email field */}
                 <div>
                <label className="label text-lg">Volunteer Email</label>
                <input
                  defaultValue={user?.email}
                  disabled
                 name='volunteer_email'
                  type="email" 
                  className="input disabled:text-black disabled:bg-white disabled:border-[#d7d7d7]  py-2 text-lg w-full" placeholder="organizer name" />
                </div>
                {/* suggestion field */}
                     <fieldset className="fieldset">
          <legend className="label text-lg">Suggestion</legend>
          <textarea className="textarea h-24 w-full disabled:text-black disabled:bg-white disabled:border-[#d7d7d7]" name='suggestion' placeholder="Text your suggestion" required></textarea>
        </fieldset>
        {/* status field */}
        <div className="mt-4">
  <span className="font-semibold text-gray-600 text-md">Status:</span>
  <span className="ml-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
    Requested
  </span>
</div>
                   <button method='dialog' className="btn border-none shadow-none bg-[#29AF8A] rounded-none text-white text-lg hover:btn hover:rounded-none hover:text-white hover:bg-[#535353] hover:text-lg hover:border-none hover:shadow-none w-full mt-5">Request</button>
                </form>
    </div>
  </div>
    );
};

export default Modal;