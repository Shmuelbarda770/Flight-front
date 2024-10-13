
import React,{useState,useEffect,useContext} from 'react';
import {NavLink} from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";

const SinUp = () => {


    const [email,setEmail]=useState('');
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [passwordConfirm,setPasswordConfirm]=useState('');
    const [ checkPassword,setCheckPassword]=useState(false);
    const [newPerson,setNewPerson]=useState(null);
    const [userExists,setUserExists]=useState(false);


    // ${}
    return (
        <div className={`flex items-center justify-center min-h-screen`}>
            <div className="w-full max-w-md p-12 transition-transform duration-500 transform bg-white rounded-3xl shadow-3xl hover:scale-105">
                <div className="flex items-center justify-center mb-8">
                </div>
                <div className="flex flex-col items-center mb-8 space-y-4">
                    <FaUserAlt size={40} className="text-blue-700" />
                    <h1 className="text-4xl font-extrabold text-gray-900">Sign In</h1>
                </div>
                <div className="space-y-4">
                    <input
                        onChange={(e)=>setEmail(e.target.value)}
                        type='email'
                        placeholder='Enter your email'
                        className="w-full px-6 py-3 transition-shadow duration-300 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg"
                    />
                    <input
                        onChange={(e)=>setUserName(e.target.value)}
                        type='text'
                        placeholder='Enter your username'
                        className="w-full px-6 py-3 transition-shadow duration-300 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg"
                    />
                    <input
                        onChange={(e)=>setPassword(e.target.value)}
                        type='password'
                        placeholder='Enter your password'
                        className="w-full px-6 py-3 transition-shadow duration-300 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg"
                    />
                    <input
                        onChange={(e)=>(e.target.value)}
                        type='password'
                        placeholder='Confirm your password'
                        className="w-full px-6 py-3 transition-shadow duration-300 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg"
                    />
                    {checkPassword && <p className='text-red-500' >*The passwords entered do not match</p>}
                </div>
                <button
                // onClick={}
                 className="w-full py-3 mt-6 text-white transition-all duration-300 transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-2xl">
                    Sign In
                </button>
                {userExists && <p className='text-red-600'>This User Exists</p>}
                <div className="mt-4">
                        <NavLink to="/LogIn" className="text-lg text-blue-500 hover:underline">
                            You have an account? <span className="font-bold">Log In</span>
                        </NavLink>
                    </div>
            </div>
            
        </div>
    );
}

export default SinUp;
