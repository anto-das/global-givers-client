import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";


const axiosInstance = axios.create({
    baseURL:'http://localhost:4000',
    withCredentials:true,
})
const useAxiosSecure = () => {
    const {handleLogout} = useContext(AuthContext);
    useEffect(()=>{
        axiosInstance.interceptors.response.use((response) =>{
            return response
        },error =>{
            console.log(error.response.status)
            if(error.response.status === 401 || error.response.status === 403){
                handleLogout()
            }
            return Promise.reject(error)
        })
        // eslint-disable-next-line
    },[])
    return axiosInstance
};
export default useAxiosSecure;