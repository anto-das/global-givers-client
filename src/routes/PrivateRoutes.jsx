import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import LoadingSpinner from '../components/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {loading,user}= useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <LoadingSpinner></LoadingSpinner>;
    }
    if(user){
        return children;
    }
    return <Navigate to={"/login"} state={location.pathname}></Navigate>
};

export default PrivateRoutes;