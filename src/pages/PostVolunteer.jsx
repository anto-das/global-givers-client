import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../hooks/useTitle';
import useAxiosSecure from '../hooks/useAxiosSecure';


const PostVolunteer = () => {
    const {user} =useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure();
     // dynamic title
      useTitle("If you need volunteers, feel free to post.")
    // handle form submit
    const handleSubmit = async e =>{
      e.preventDefault()
      const form = e.target;
      const organizerName = form.organizer_name.value;
      const organizerEmail = form.organizer_email.value;
      const thumbnail = form.thumbnail.value;
      const postTitle = form.post_title.value;
      const location = form.location.value;
      const category = form.category.value;
      const deadline = form.deadline.value;
      const volunteersNeeded = parseInt(form.volunteer_number.value);
      const description = form.description.value;

      const formData = {organizerName,organizerEmail,thumbnail,postTitle,location,category,deadline,volunteersNeeded,description};
      // send the data client-side to server-side
      //console.log(formData)
      try{
        const {data} = await axiosSecure.post(`/volunteer-posts`,formData)
        if(data.acknowledged){
          form.reset()
         return toast.success("Your volunteer data save in the DB successfully")
        }
      } catch(err){
        //console.log(err)
        toast.error(err)
      }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'> 
      <div className="p-2 md:p-6 mx-auto bg-white rounded-md shadow-lg  space-y-4">
        <h1 className='text-xl font-bold text-gray-700'>Add a Volunteer Post</h1>   
        <form onSubmit={handleSubmit} className="fieldset">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* organizer name field*/}
        <div>
        <label className="label text-lg" htmlFor='organizer name'>Organizer Name</label>
        <input 
        defaultValue={user?.displayName}
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
          defaultValue={user?.email}
          disabled
         name='organizer_email'
          type="email" 
          className="input disabled:text-black disabled:bg-white disabled:border-[#d7d7d7]  py-2 text-lg w-full" placeholder="organizer name" />
        </div>
            {/* thumbnail field*/}
        <div>
        <label className="label text-lg" htmlFor='thumbnail'>Thumbnail</label>
        <input id='thumbnail' name='thumbnail' type="url" className="input py-2 text-lg w-full" placeholder="Thumbnail" required />
        </div>
        {/* post title field*/}
          <div>
          <label className="label text-lg" htmlFor='post-title'>Post Title</label>
          <input id='post-title' name='post_title' type="text" className="input text-lg w-full" placeholder="Post Title" required/>
          </div>
        {/* location field*/}
          <div>
          <label className="label text-lg" htmlFor='location'>Location</label>
          <input id='location' name='location' type="text" className="input text-lg w-full" placeholder="Location" required/>
          </div>
        {/* category field*/}
          <div>
          <label className="label text-lg" htmlFor='category'>Category</label><br />
         <select 
          id="category"
          name="category"
          className='border border-[#D7D7D7] p-1.5 input rounded-sm text-lg text-black w-full'
          required
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
          <DatePicker
          className='border border-[#d7d7d7] input p-1.5 text-lg rounded-sm w-full'
          name='deadline'
          required
             selected={startDate}
             onChange={date => setStartDate(date)} 
              />
          </div>
          {/* how much number of volunteer need */}
          <div>
          <label className="label text-lg" htmlFor='volunteer'>Volunteer No.</label>
          <input id='volunteer' name='volunteer_number' type="number" className="input text-lg w-full" placeholder="number of volunteer" required/>
          </div>
            </div>
            {/* description field */}
             <fieldset className="fieldset">
  <legend className="label text-lg">Description</legend>
  <textarea className="textarea h-24 w-full" name='description' placeholder="Text your details" required></textarea>
</fieldset>
          <button className="btn border-none shadow-none bg-[#29AF8A] rounded-none text-white text-lg hover:btn hover:rounded-none hover:text-white hover:bg-[#535353] hover:text-lg hover:border-none hover:shadow-none w-full mt-5">Add Post</button>
        </form>
      </div>
        </div>
    );
};

export default PostVolunteer;