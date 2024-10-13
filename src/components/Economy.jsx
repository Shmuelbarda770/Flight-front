import React, { useContext, useState } from 'react';
import {DataPerson} from '../context/context'
const Economy = () => {

    const {whichEconomy,setWhichEconomy}=useContext(DataPerson)
    
    
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-bold">Class Options</h2>
        <ul className="space-y-2">
          <li
          onClick={()=>{setWhichEconomy("Economy")}}
           className="p-3 bg-gray-100 rounded-lg shadow-sm">Economy</li>

          <li
          onClick={()=>{setWhichEconomy("Premium-Economy")}}
           className="p-3 bg-gray-100 rounded-lg shadow-sm">Premium Economy</li>

          <li
          onClick={()=>{setWhichEconomy("Business")}}
           className="p-3 bg-gray-100 rounded-lg shadow-sm">Business</li>
          
          <li
          onClick={()=>{setWhichEconomy("First")}}
           className="p-3 bg-gray-100 rounded-lg shadow-sm">First</li>
        </ul>
      </div>
    );
  };
  
  export default Economy;
  