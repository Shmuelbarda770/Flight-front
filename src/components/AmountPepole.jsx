/* eslint-disable no-unused-vars */
import React, { useContext,useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import {DataPerson} from '../context/context'
const AmountPepole = () => {

    const {adults,setAdults}=useContext(DataPerson)
    const {children,setChildren}=useContext(DataPerson)
    const {infantsSeat,setInfantsSeat}=useContext(DataPerson)
    const {infants ,setInfants }=useContext(DataPerson)
  



    
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-bold">Amount of People</h2>
      <ul className="space-y-4">
        <li className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm">
          <div>
            <h3 className="font-semibold">Adults</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
             onClick={()=>{setAdults(adults+1)}}
             className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
              <CiCirclePlus />
            </button>
            <span className="text-lg">{adults}</span>
            <button 
            onClick={()=>{adults>1? setAdults(adults-1):setAdults(1)}}
            className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600">
              <CiCircleMinus />
            </button>
          </div>
        </li>
        
        <li className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm">
          <div>
            <h3 className="font-semibold">Children</h3>
            <p className="text-sm text-gray-600">Aged 2–11</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
            onClick={()=>{setChildren(children+1)}}
             className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
              <CiCirclePlus />
            </button>
            <span className="text-lg">{children}</span>
            <button
            onClick={()=>{children>0? setChildren(children-1):setChildren(0)}}
             className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600">
              <CiCircleMinus />
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm">
          <div>
            <h3 className="font-semibold">Infants (In seat)</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
            onClick={()=>{setInfantsSeat(infantsSeat+1)}}
             className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
              <CiCirclePlus />
            </button>
            <span className="text-lg">{infantsSeat}</span>
            <button
            onClick={()=>{infantsSeat>0? setInfantsSeat(infantsSeat-1):setInfantsSeat(0)}}
             className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600">
              <CiCircleMinus />
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm">
          <div>
            <h3 className="font-semibold">Infants (On lap)</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
            onClick={()=>{setInfants(infants+1)}}
             className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600">
              <CiCirclePlus  />
            </button>
            <span className="text-lg">{infants}</span>
            <button
            onClick={()=>{infants>0? setInfants(infants-1):setInfants(0)}}
             className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600">
              <CiCircleMinus />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AmountPepole;
