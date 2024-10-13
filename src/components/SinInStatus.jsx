
import React, { useState, useContext } from 'react';
import { GrUserManager } from "react-icons/gr";
import { FaUsers, FaBriefcase } from "react-icons/fa";
import { DataPerson } from '../context/context';
const SignInStatus = () => {

  const { status, setStatus } = useContext(DataPerson);

  return (
    <div className="flex items-center justify-around bg-white rounded-md">
      <div
        onClick={() => { setStatus('Clients') }}
        className={`flex items-center px-3 py-2 transition-colors duration-300 ${status === 'Clients' ? 'bg-gray-300' : 'bg-white'} border-r-2 border-gray-300 hover:bg-gray-200`}>
        <FaUsers className="mr-2 text-2xl text-blue-600" />
        <div className="text-lg font-semibold text-blue-600">Clients</div>
      </div>

      <div
        onClick={() => { setStatus('Employed') }}
        className={`flex items-center px-3 py-2 transition-colors duration-300 ${status === 'Employed' ? 'bg-gray-300' : 'bg-white'} border-r-2 border-gray-300 hover:bg-gray-200`}>
        <FaBriefcase className="mr-2 text-2xl text-blue-600" />
        <div className="text-lg font-semibold text-blue-600">Employed</div>
      </div>

      <div
        onClick={() => { setStatus('Managers') }}
        className={`flex items-center px-3 py-2 transition-colors  ${status === 'Managers' ? 'bg-gray-300' : 'bg-white'} duration-300 hover:bg-gray-200`}>
        <GrUserManager className="mr-2 text-2xl text-blue-600" />
        <div className="text-lg font-semibold text-blue-600">Managers</div>
      </div>
    </div>
  );
}

export default SignInStatus;

