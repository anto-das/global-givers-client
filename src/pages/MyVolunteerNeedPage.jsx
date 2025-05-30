import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../providers/AuthProvider';
import toast from "react-hot-toast";
import Message from "../components/Message";
import { Link } from "react-router-dom";
const MyVolunteerNeedPage = () => {
  const {user} = useContext(AuthContext);
    const [myPosts,setMyPosts] = useState([]);
    // get data from DB using Axios
    useEffect(() =>{
      fetchAllPostsData()
        // eslint-disable-next-line 
    },[user])
    const fetchAllPostsData = async () =>{
    const {data} = await axios.get(`${import.meta.env.VITE_api_url}/volunteer-need-posts?organizerEmail=${user?.email}`)
    setMyPosts(data)
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
            myPosts.length !== 0 ?   <table className="table table-zebra">
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
        <td> <Link to={"/volunteer-update"}><button className="btn btn-xs bg-blue-400 border-none text-white">Update</button></Link>  <button onClick={() =>modernDelete(posts._id)} className="btn btn-xs bg-red-400 border-none text-white">Delete</button> </td>
      </tr>)
      }
    </tbody>
  </table> : <Message></Message>
          }
</div>
    );
};

export default MyVolunteerNeedPage;