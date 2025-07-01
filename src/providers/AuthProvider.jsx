import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth/cordova';
import toast from 'react-hot-toast';
import axios from 'axios';
// eslint-disable-next-line
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState("");
    const googleProvider = new GoogleAuthProvider();
    // create user
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password,)
    }
    // sign in user with email and password
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // user information update
    const updateUser = (updatedData) =>{
        setLoading(true)
      return updateProfile(auth.currentUser,updatedData)
    }
    // googleLogout
    const googleSignIn = () =>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider);
    }
    // user logout
    const handleLogout = () =>{
        setLoading(true)
        signOut(auth)
        .catch(err =>console.log(err))
        toast.error("successfully logout")
    }
    // onAuthStateChange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser)
              setUser(currentUser);
            if(currentUser?.email){
                 const user = {email:currentUser.email}
                    axios.post(`${import.meta.env.VITE_api_url}/jwt`,user,{withCredentials:true})
                    .then((res) =>{
                        console.log('login:',res.data)
                        setLoading(false)
                    })
            }
            else{
                axios.post(`${import.meta.env.VITE_api_url}/logout`,{},{withCredentials:true})
                .then(res =>{
                    console.log('logout:', res.data)
                    setLoading(false)
                })
            }
          
        });
        return ()=>{
            unSubscribe()
        }
    },[])
    const AuthInfo ={
        createUser,
        signInUser,
        updateUser,
        googleSignIn,
        handleLogout,
        user,
        error,
        setError,
        loading,
    }
    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;