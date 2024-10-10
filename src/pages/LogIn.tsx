
import React, { useContext, useState,useCallback } from 'react';
import { GiCommercialAirplane } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const LogIn = () => {
    
    const [password, setPassword] = useState('');
    const [userNotIn, setUserNotIn] = useState(false);
   const [message,setMessage]=useState('')
    const navigate = useNavigate();

//  ${}
    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4`}>
           
            <div className="relative w-full max-w-md p-12 transition-transform duration-500 transform bg-white rounded-3xl shadow-3xl hover:scale-105">
               
                <div className="absolute top-0 left-0 w-full p-2 shadow-md rounded-t-3xl">
                    
                </div>
                <div className="pt-16"> 
                    <div className="flex items-center justify-center mb-8">
                        <GiCommercialAirplane size={120} className="text-blue-700 transition-transform duration-500 hover:rotate-12" />
                    </div>
                    <div className="flex flex-col items-center mb-6 space-y-4">
                        <FaUserAlt size={40} className="text-blue-700" />
                        <h1 className="text-4xl font-extrabold text-gray-900">Log In</h1>
                    </div>
                    <div className="space-y-4">
                        <input
                            onChange={(e) => (e.target.value)}
                            type='text'
                            placeholder='Username'
                            className="w-full px-6 py-3 transition-shadow duration-300 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg"
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                            placeholder='Password'
                            className="w-full px-6 py-3 transition-shadow duration-300 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg"
                        />
                        {userNotIn && <p className='text-red-500'>{`${message}`}</p>}
                        <button
                            // onClick={}
                            className="w-full py-3 text-white transition-all duration-300 transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-2xl">
                            {(status === 'Clients')? "Enter":"Send email"}
                        </button>
                    </div>
                    <div className="mt-4">
                        <NavLink to="/SinUp" className="text-lg text-blue-500 hover:underline">
                            Don&apos;t have an account? <span className="font-bold">Create one</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;


