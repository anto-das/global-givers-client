import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyRequestPage = () => {
    const {user} = useContext(AuthContext);
    const [myRequests,setMyRequest] = useState([]);
    const axiosSecure = useAxiosSecure();
     // dynamic title
      useTitle("My-request-page")
    useEffect(()=>{
        fetchAllRequestData()
        // eslint-disable-next-line
    },[user])
    const fetchAllRequestData = async () =>{
        // const {data} = await axios.get(`${import.meta.env.VITE_api_url}/my-request-volunteer?volunteerEmail=${user?.email}`)
        const {data} = await axiosSecure(`/my-request-volunteer?volunteerEmail=${user?.email}`)
        setMyRequest(data)
    }
    const handleDelete = async (id) =>{
      try{
        const {data} = await axios.delete(`${import.meta.env.VITE_api_url}/my-volunteer-request/${id}`)
        fetchAllRequestData()
        //console.log(data)
      } catch(error){
        //console.log(error)
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
        )
      )
    }
    return (
       <div className="overflow-x-auto w-11/12 mx-auto">
 {
  myRequests.length !== 0 ?  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Category</th>
        <th>Deadline</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        myRequests.map((request,indx) =><tr key={request._id}>
        <th> {indx +1} </th>
        <td>{request.requestPostTitle
}</td>
        <td className={`inline-block border-none rounded-none capitalize ${request.requestCategory === 'health care' && 'text-blue-400 bg-blue-100/60'}
    ${request.requestCategory === 'education' && 'text-amber-500 bg-amber-100/60'}
    ${request.requestCategory === 'social service' && 'text-green-400 bg-green-100/60'}
    ${request.requestCategory === 'animal welfare' && 'text-pink-500 bg-pink-100/60'}`}> {request.requestCategory} </td>
        <td>{request.requestDeadline}</td>
        <td><button onClick={() =>modernDelete(request._id)} className="btn btn-xs bg-red-400 border-none text-white">Cancel</button></td>
      </tr>)
      }
    </tbody>
  </table> : <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center w-full min-h-[calc(100vh-305px)] gap-4">
            <h1 className="capitalize text-center text-4xl font-bold text-green-600">No volunteer activity found. Be the first to make a difference!</h1>
        </div>
 }
</div>
    );
};

export default MyRequestPage;