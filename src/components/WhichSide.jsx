
import React, {useContext} from 'react';
import {DataPerson} from '../context/context'
const WhichSide = () => {
    
    const {whichTrip,setWhichTrip}=useContext(DataPerson)

    console.log(whichTrip);
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-bold">Trip Type</h2>
      <ul className="space-y-2">
        <li
        onClick={()=>setWhichTrip("Round trip")}
         className="p-3 transition duration-150 ease-in-out bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">
          Round trip
        </li>
        <li
        onClick={()=>setWhichTrip("One-way")}
         className="p-3 transition duration-150 ease-in-out bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">
          One-way
        </li>
        <li
        onClick={()=>setWhichTrip("Multi-city")}
         className="p-3 transition duration-150 ease-in-out bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">
          Multi-city
        </li>
      </ul>
    </div>
  );
};

export default WhichSide;

