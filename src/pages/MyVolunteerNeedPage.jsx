import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../providers/AuthProvider';
import toast from "react-hot-toast";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import useTitle from "../hooks/useTitle";
const MyVolunteerNeedPage = () => {
  const {user} = useContext(AuthContext);
    const [myPosts,setMyPosts] = useState([]);
     // dynamic title
      useTitle("Volunteer-need-page")
    // get data from DB using Axios
    useEffect(() =>{
      fetchAllPostsData()
        // eslint-disable-next-line 
    },[user])
    const fetchAllPostsData = async () =>{
   try{
     const {data} = await axios.get(`${import.meta.env.VITE_api_url}/volunteer-need-posts?organizerEmail=${user?.email}`)
     setMyPosts(data)
   } catch(error){
    if(error.response?.status === 404){
      setMyPosts([])
      toast.error("No posts found for your email")
    }else{
      toast.error("something went wrong...")
    }
   }
    }
    const handleDelete = async (id) =>{
      try{
        const {data} = await axios.delete(`${import.meta.env.VITE_api_url}/volunteer-posts/${id}`)
        fetchAllPostsData()
        console.log(data)
      } catch(error){
        console.log(error)
      }
    }
    const modernDelete = id =>{
      toast(
        (t) =>(
          <div className="flex items-center gap-2">
            <div>
              <p>Ary You <b>Sure</b> ? </p>
            </div>
            <div className="flex gap-2">
              <button onClick={() =>{
                toast.dismiss(t.id)
                handleDelete(id)
              }} className="btn btn-xs bg-red-400 p-2 text-white border-none font-bold">Yes</button>
              <button onClick={() => toast.dismiss(t.id)} className="btn btn-xs p-2 bg-green-500 text-white border-none font-bold">Cancel</button>
            </div>
          </div>
        ))
    }
    return (
        <div className="overflow-x-auto w-11/12 mx-auto py-8">
          {
            myPosts.length !== 0 ?   <table className="table bg-white table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Category</th>
        <th>Deadline</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        myPosts.map((posts,idx) =>  <tr key={posts._id}>
        <th>{idx + 1}</th>
        <td>{posts.postTitle}</td>
        <td className={`inline-block border-none rounded-none capitalize ${posts.category === 'health care' && 'text-blue-400 bg-blue-100/60'}
    ${posts.category === 'education' && 'text-amber-500 bg-amber-100/60'}
    ${posts.category === 'social service' && 'text-green-400 bg-green-100/60'}
    ${posts.category === 'animal welfare' && 'text-pink-500 bg-pink-100/60'}`}> {posts.category} </td>
        <td> {posts.deadline} </td>
        <td> {posts.organizerEmail} </td>
        <td className="flex gap-3 items-center">  <button onClick={() =>modernDelete(posts._id)} className="border-none hover:text-red-400 font-bold text-2xl"><RiDeleteBin6Line /></button> <Link to={`/volunteer-update/${posts._id}`}><button className=" hover:text-blue-400 font-bold text-2xl mt-1 border-none"><TbEdit /></button></Link> </td>
      </tr>)
      }
    </tbody>
  </table> : <Message></Message>
          }
</div>
    );
};

export default MyVolunteerNeedPage;