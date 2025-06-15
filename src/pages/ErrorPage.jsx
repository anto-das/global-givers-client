import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Global-Givers-Error-Loading')
    return (
        <div className="text-6xl items-center flex min-h-screen flex-col justify-center space-y-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<path d="M50.385,50.385c-10.153,10.153-26.616,10.153-36.77,0s-10.153-26.616,0-36.77s26.616-10.153,36.77,0	S60.538,40.231,50.385,50.385z M43.314,40.485L36.243,32l7.071-8.485l-2.828-2.828L32,27.757l-8.485-7.071l-2.828,2.828L27.757,32	l-7.071,8.485l2.828,2.828L32,36.243l8.485,7.071L43.314,40.485z"></path>
</svg>
            <span className='text-[120px] font-bold text-[#29AF8A]'>404</span>
            <p className='lg:text-7xl text-center font-bold text-gray-500'>Oops! Page Not Found</p>
            <div className="">
 <Link to={'/'}>
 <button className="btn text-gray-200 bg-[#29AF8A] join-item">Go to Home Page</button>
 </Link> 
</div>
        </div>
    );
};

export default ErrorPage;