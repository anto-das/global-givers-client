import React, { useContext, useState } from 'react';
import GoogleIcon from '../assets/google-logo-search-new.svg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import toast from 'react-hot-toast';
const RegisterPage = () => {
    const [showPassword,setShowPassword] = useState(false);
    const {googleSignIn,createUser,updateUser,error,setError} = useContext(AuthContext);
    const navigate = useNavigate();
    const registerWithGoogle = () =>{
      googleSignIn()
      .then(() =>{
        toast.success("Successfully Sign With Google")
        navigate("/")
      })
      .catch(err =>toast.error(err.message))
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if(!regex.test(password)){
          return setError({password:"Password must include uppercase and lowercase letters, numbers, and at least one special character."})
         }
        createUser(email,password)
        .then(() => {
          updateUser({displayName:name,photoURL:photo})
          toast.success("Successfully Register")
          navigate('/')
        })
        .catch(err =>toast.error(err.message))
        
    }
    return (
        <div className='w-11/14 mx-auto bg-[#4fe2c5] hero min-h-[calc(100vh-306px)]'>
        <div className=" w-1/2 py-10">
                  <h1 className=' text-white text-3xl font-bold py-5 text-center rounded-t-lg bg-[#1a5f51]'>Register Form</h1>
            <div className="bg-base-100 card-body shadow-2xl shrink-0 rounded-b-lg">
              <form onSubmit={handleSubmit} className="space-y-2">
             <div>
             <label className="label">User name</label>
             <input type="text" name='name' className="input w-full" placeholder="User name" required/>
             </div>
              <div>
              <label className="label">Photo </label>
              <input type="url" name='photo' className="input w-full" placeholder="Photo URL" required/>
              </div>
             <div>
             <label className="label">Email</label>
             <input type="email" name='email' className="input w-full" placeholder="Email" required/>
             </div>
                <div className='relative'>
                <label className="label">Password</label>
                <input type={`${ showPassword ? "text" :"password"}`} name='password' className="input w-full z-0" placeholder="Password" required/>
                <div>
                  {
                    showPassword ?     <p onClick={() => setShowPassword(!showPassword)} className='absolute text-lg top-8 right-5 z-1'><IoMdEye /></p> : <p onClick={() => setShowPassword(!showPassword)} className='absolute text-lg top-8 right-5 z-1'><IoMdEyeOff /></p>
                  }
                </div>
                {error.password && <label className=' text-red-500'>{error?.password}</label>}
                </div>
                <div>
                <button className="btn w-full text-lg text-white bg-[#4fe2c5] mt-4">Register</button>
                </div>
                <div className='col-span-2'><p className="text-center  mt-3">Already Have an account ? <Link to={'/login'}><span className='text-lg  underline hover:text-green-500'>Login</span></Link> </p></div>
              </form>
              <div className="divider">or</div>
              <button 
              onClick={registerWithGoogle}
            className="btn border border-gray-400 text-gray-700"> <img className='w-6' src={GoogleIcon} alt="" /> Google</button>
              <button  className="btn border border-gray-400 text-gray-700"> 
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 64 64">
      <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
      </svg>GitHub</button>
            </div>
        </div>
              </div>
    );
};

export default RegisterPage;