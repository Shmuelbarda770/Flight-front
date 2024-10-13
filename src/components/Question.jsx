
import React, { useState ,useContext} from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Fill from './Fill'
import {DataPerson} from '../context/context'
const Question = ({ question, answer }) => {
  const [openFill, setOpenFill] = useState(false)
  const {colorApp}=useContext(DataPerson);
 
  return (
    <div className={`p-3 border-b border-black rounded-lg shadow-lg ${colorApp}`}>
    <div className="flex items-center justify-between">
      <span className="text-base font-semibold text-black">{question}</span>
      <button
        className="flex items-center justify-center p-1 transition-transform duration-300 transform hover:scale-110 focus:outline-none"
        onClick={() => setOpenFill(prev => !prev)}
      >
        {openFill ? (
          <IoIosArrowUp className="text-2xl text-black hover:text-yellow-300" />
        ) : (
          <IoIosArrowDown className="text-2xl text-black hover:text-yellow-300" />
        )}
      </button>
    </div>
    {openFill && <Fill answer={answer} />}
  </div>
  

  )
}

export default Question

